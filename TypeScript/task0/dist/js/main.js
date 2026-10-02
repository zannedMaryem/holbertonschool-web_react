"use strict";
const student1 = {
    firstName: "Maryem",
    lastName: "Zanned",
    age: 33,
    location: "Tunisia",
};
const student2 = {
    firstName: "Adem",
    lastName: "Gary",
    age: 3,
    location: "Tunisia",
};
const studentsList = [student1, student2];
const table = document.createElement("table");
const tableHead = document.createElement("thead");
const headerRow = document.createElement("tr");
const firstNameHeader = document.createElement("th");
const locationHeader = document.createElement("th");
firstNameHeader.textContent = "First name";
locationHeader.textContent = "Location";
headerRow.append(firstNameHeader, locationHeader);
tableHead.appendChild(headerRow);
table.appendChild(tableHead);
const tableBody = document.createElement("tbody");
studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.append(firstNameCell, locationCell);
    tableBody.appendChild(row);
});
table.appendChild(tableBody);
document.body.appendChild(table);
//# sourceMappingURL=main.js.map