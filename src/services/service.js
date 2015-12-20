var request = require("request");

export class Param {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
}

export class Service {
	
	constructor(name, language, params) {
		this.name = name;
		this.language = language;
		this.params = params;
		this._request = request.defaults({jar: true});
	}
	
	login(params) { throw "Not implemented"; }
	
	logout() { throw "Not implemented"; }

	get schools() { throw "Not implemented"; }
}