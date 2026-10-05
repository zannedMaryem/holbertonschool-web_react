/// <reference path="./crud.d.ts" />
import * as CRUD from './crud';
const row = { firstName: 'Guillaume', lastName: 'Salva' };
const newRowID = CRUD.insertRow(row);
console.log(newRowID);
const updatedRow = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(updatedRow);
CRUD.deleteRow(newRowID);
