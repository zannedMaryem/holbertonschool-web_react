"use strict";
const director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
const printTeacher = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};
console.log(printTeacher("John", "Doe"));
class StudentClass {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return ("Currently working");
    }
    displayName() {
        return this.firstName;
    }
}
const s = new StudentClass("Maryem", "Zanned");
console.log(s.displayName());
console.log(s.workOnHomework());
