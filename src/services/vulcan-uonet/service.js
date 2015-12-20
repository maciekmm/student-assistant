import { Service, Param } from "../service";
var cheerio = require("cheerio");

export default class UONET extends Service {
    constructor() {
        super("UONET Vulcan", "pl", [
            new Param("url", "text"),
            new Param("username", "text"),
            new Param("password", "password")
        ]);
    }

    login(params) {
        this.url = params.url;
        let request = this._request;
        return new Promise(function(resolve, reject) {
            request('https://www.' + params.url + '/_layouts/authenticate.aspx?source=https://www.' + params.url + '/Strony/GPE.aspx', function(error, response, body) {
				if(error || response.statusCode != 200) {
					reject(error || response.statusCode);
					return;
				}
				let parsed = cheerio.load(body)('form[name="form1"]');
                request.post({
                    url: 'https://adfs.' + params.url + '/adfs/ls/?wa=wsignin1.0&wtrealm=urn:sharepoint:gpe',
                    form: {
                        UsernameTextBox: params.username,
                        PasswordTextBox: params.password,
						__VIEWSTATE: parsed.find('input[name="__VIEWSTATE"]').val(),
						__VIEWSTATEGENERATOR: parsed.find('input[name="__VIEWSTATEGENERATOR"]').val(),
						__EVENTVALIDATION: parsed.find('input[name="__EVENTVALIDATION"]').val(),
						__db: parsed.find('input[name="__db"]').val()
                    }
                }, function(error, response, body) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(body);
                    }
                })
            });
        })
    }

    logout() {
        return new Promise(function(resolve, reject) {
            this._request.get('https://adfs.' + this.url + '/adfs/ls/?wa=wsignout1.0', function(error, response, body) {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }
}