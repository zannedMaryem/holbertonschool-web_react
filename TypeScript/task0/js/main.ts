interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: "Maryem",
    lastName: "Zanned",
    age: 33,
    location: "Tunisia",
};
const student2: Student = {
    firstName: "Adem",
    lastName: "Gary",
    age: 3,
    location: "Tunisia",
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
const tableHead: HTMLTableSectionElement = document.createElement("thead");
const headerRow: HTMLTableRowElement = document.createElement("tr");
const firstNameHeader: HTMLTableCellElement = document.createElement("th");
const locationHeader: HTMLTableCellElement = document.createElement("th");

firstNameHeader.textContent = "First name";
locationHeader.textContent = "Location";
headerRow.append(firstNameHeader, locationHeader);
tableHead.appendChild(headerRow);
table.appendChild(tableHead);

const tableBody: HTMLTableSectionElement = document.createElement("tbody");

studentsList.forEach((student: Student): void => {
    const row: HTMLTableRowElement = document.createElement("tr");
    const firstNameCell: HTMLTableCellElement = document.createElement("td");
    const locationCell: HTMLTableCellElement = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.append(firstNameCell, locationCell);
    tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
