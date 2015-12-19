export default class Semester {

	constructor(name, subjects) {
		this.name = name;
		this.subjects = subjects;
	}

	get average() {
		let total = 0;

		for (let subject of this.subjects) {
			total += subject.average;
		}

		return total / subjects.length;
	}
}