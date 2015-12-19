export default class Service {
	
	constructor(name, language) {
		this.name = name;
		this.language = language;
		this.branch = null;
	}
	
	login(params) { throw "Not implemented"; }
	
	logout() { throw "Not implemented"; }
	
	get schools() { throw "Not implemented"; }
	
	get branches() { throw "Not implemented"; }
}