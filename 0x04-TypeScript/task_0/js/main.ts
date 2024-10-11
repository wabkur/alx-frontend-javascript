interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'abdul',
    lastName: 'moh',
    age: 20,
    location: 'istanbul',
}

const student2: Student = {
    firstName: 'mike',
    lastName: 'man',
    age: 18,
    location: 'tokyo',
}

let studentsList: Student[] = [];

studentsList.push(student1);
studentsList.push(student2);

let myVar = document.createElement('table');

for (let x = 0; x < studentsList.length; x++) {
    let row = myVar.insertRow();
    let name = row.insertCell();
    let location = row.insertCell();
    name.innerHTML = studentsList[x].firstName;
    location.innerHTML = studentsList[x].location;
}

document.body.appendChild(myVar);
