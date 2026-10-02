/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return ('Working from home');
    };
    Director.prototype.getCoffeeBreak = function () {
        return ('Getting a coffee break');
    };
    Director.prototype.workDirectorTasks = function () {
        return ('Getting to director tasks');
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return ('Cannot work from home');
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return ('Cannot have a break');
    };
    Teacher.prototype.workTeacherTasks = function () {
        return ('Getting to work');
    };
    return Teacher;
}());
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVlBO0lBQUE7SUFVQSxDQUFDO0lBVEcsK0JBQVksR0FBWjtRQUNJLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxpQ0FBYyxHQUFkO1FBQ0ksT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELG9DQUFpQixHQUFqQjtRQUNJLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQztBQUVEO0lBQUE7SUFXQSxDQUFDO0lBVkcsOEJBQVksR0FBWjtRQUNJLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxnQ0FBYyxHQUFkO1FBQ0ksT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELGtDQUFnQixHQUFoQjtRQUNJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzNDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDNUMsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ3hCO0lBQ0QsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQzFCLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUVwQyxTQUFTLFVBQVUsQ0FBQyxRQUE0QjtJQUM1QyxPQUFPLFFBQVEsWUFBWSxRQUFRLENBQUM7QUFDeEMsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLFFBQTRCO0lBQzdDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztLQUM3QztTQUFNO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0tBQzVDO0FBQ0wsQ0FBQztBQUVELFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcbn1cblxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAoJ1dvcmtpbmcgZnJvbSBob21lJyk7XG4gICAgfVxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAoJ0dldHRpbmcgYSBjb2ZmZWUgYnJlYWsnKTtcbiAgICB9XG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICgnR2V0dGluZyB0byBkaXJlY3RvciB0YXNrcycpO1xuICAgIH1cbn1cblxuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKCdDYW5ub3Qgd29yayBmcm9tIGhvbWUnKTtcbiAgICB9XG5cbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKCdDYW5ub3QgaGF2ZSBhIGJyZWFrJyk7XG4gICAgfVxuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICgnR2V0dGluZyB0byB3b3JrJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IERpcmVjdG9yIHwgVGVhY2hlciB7XG4gICAgaWYgKHR5cGVvZiBzYWxhcnkgPT09ICdudW1iZXInICYmIHNhbGFyeSA8IDUwMCkge1xuICAgICAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEaXJlY3RvcigpO1xufVxuXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgyMDApKTtcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDEwMDApKTtcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKCckNTAwJykpO1xuXG5mdW5jdGlvbiBpc0RpcmVjdG9yKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBlbXBsb3llZSBpcyBEaXJlY3RvciB7XG4gICAgcmV0dXJuIGVtcGxveWVlIGluc3RhbmNlb2YgRGlyZWN0b3I7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVXb3JrKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiB2b2lkIHtcbiAgICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coZW1wbG95ZWUud29ya0RpcmVjdG9yVGFza3MoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coZW1wbG95ZWUud29ya1RlYWNoZXJUYXNrcygpKTtcbiAgICB9XG59XG5cbmV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDIwMCkpO1xuZXhlY3V0ZVdvcmsoY3JlYXRlRW1wbG95ZWUoMTAwMCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==