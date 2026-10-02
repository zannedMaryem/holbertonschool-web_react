interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: Number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));

interface student {
    firstName: string;
    lastName: string;

    workOnHomework(): string;
    displayName(): string;
}

interface studentConstructor {
    new (firstName: string, lastName: string): student;
}

class StudentClass implements student {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return ("Currently working");
    }
    
    displayName(): string {
        return this.firstName;
    }
}

const s = new StudentClass("Maryem", "Zanned");
console.log(s.displayName());
console.log(s.workOnHomework());
