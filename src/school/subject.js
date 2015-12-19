export default class Subject {

	constructor(name, marks, endingMark) {
		this.name = name;
		this.marks = marks;
	}

	get average() {
		let totalWeight = 0;
		let totalGrade = 0;

		for (let grade of this.marks) {
			totalWeight += grade.weight;
			totalGrade += grade.grade;
		}

		return totalGrade / totalWeight;
	}
}