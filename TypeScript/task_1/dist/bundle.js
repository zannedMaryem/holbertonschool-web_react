/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
console.log(printTeacher("John", "Doe"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return ("Currently working");
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var s = new StudentClass("Maryem", "Zanned");
console.log(s.displayName());
console.log(s.workOnHomework());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWFBLElBQU0sU0FBUyxHQUFjO0lBQzNCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsUUFBUSxFQUFFLFFBQVE7SUFDbEIsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixlQUFlLEVBQUUsRUFBRTtDQUNwQixDQUFDO0FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQU12QixJQUFNLFlBQVksR0FBeUIsVUFBQyxTQUFTLEVBQUUsUUFBUTtJQUMzRCxPQUFPLFVBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxlQUFLLFFBQVEsQ0FBRSxDQUFDO0FBQzFDLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQWN6QztJQUlJLHNCQUFZLFNBQWlCLEVBQUUsUUFBZ0I7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDSSxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDO0FBRUQsSUFBTSxDQUFDLEdBQUcsSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVGVhY2hlcntcbiAgICByZWFkb25seSBmaXJzdE5hbWU6IHN0cmluZztcbiAgICByZWFkb25seSBsYXN0TmFtZTogc3RyaW5nO1xuICAgIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XG4gICAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXI7XG4gICAgbG9jYXRpb246IHN0cmluZztcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmludGVyZmFjZSBEaXJlY3RvcnMgZXh0ZW5kcyBUZWFjaGVyIHtcbiAgICBudW1iZXJPZlJlcG9ydHM6IE51bWJlcjtcbn1cblxuY29uc3QgZGlyZWN0b3IxOiBEaXJlY3RvcnMgPSB7XG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBsYXN0TmFtZTogJ0RvZScsXG4gIGxvY2F0aW9uOiAnTG9uZG9uJyxcbiAgZnVsbFRpbWVFbXBsb3llZTogdHJ1ZSxcbiAgbnVtYmVyT2ZSZXBvcnRzOiAxNyxcbn07XG5jb25zb2xlLmxvZyhkaXJlY3RvcjEpO1xuXG5pbnRlcmZhY2UgcHJpbnRUZWFjaGVyRnVuY3Rpb24ge1xuICAgIChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZztcbn1cblxuY29uc3QgcHJpbnRUZWFjaGVyOiBwcmludFRlYWNoZXJGdW5jdGlvbiA9IChmaXJzdE5hbWUsIGxhc3ROYW1lKSA9PiB7XG4gICAgcmV0dXJuIGAke2ZpcnN0TmFtZVswXX0uICR7bGFzdE5hbWV9YDtcbn1cblxuY29uc29sZS5sb2cocHJpbnRUZWFjaGVyKFwiSm9oblwiLCBcIkRvZVwiKSk7XG5cbmludGVyZmFjZSBzdHVkZW50IHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuXG4gICAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nO1xuICAgIGRpc3BsYXlOYW1lKCk6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIHN0dWRlbnRDb25zdHJ1Y3RvciB7XG4gICAgbmV3IChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0dWRlbnQ7XG59XG5cbmNsYXNzIFN0dWRlbnRDbGFzcyBpbXBsZW1lbnRzIHN0dWRlbnQge1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuICAgICAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XG4gICAgfVxuXG4gICAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIChcIkN1cnJlbnRseSB3b3JraW5nXCIpO1xuICAgIH1cbiAgICBcbiAgICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5maXJzdE5hbWU7XG4gICAgfVxufVxuXG5jb25zdCBzID0gbmV3IFN0dWRlbnRDbGFzcyhcIk1hcnllbVwiLCBcIlphbm5lZFwiKTtcbmNvbnNvbGUubG9nKHMuZGlzcGxheU5hbWUoKSk7XG5jb25zb2xlLmxvZyhzLndvcmtPbkhvbWV3b3JrKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9