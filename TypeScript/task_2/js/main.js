"use strict";
class Director {
    workFromHome() {
        return ('Working from home');
    }
    getCoffeeBreak() {
        return ('Getting a coffee break');
    }
    workDirectorTasks() {
        return ('Getting to director tasks');
    }
}
class Teacher {
    workFromHome() {
        return ('Cannot work from home');
    }
    getCoffeeBreak() {
        return ('Cannot have a break');
    }
    workTeacherTasks() {
        return ('Getting to work');
    }
}
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return ('Teaching Math');
    }
    return ('Teaching History');
}
console.log(teachClass('Math'));
console.log(teachClass('History'));
