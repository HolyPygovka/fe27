const data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }, {
        firstName: 'Svetlana',
        lastName: 'Pypkina',
        age: 73
    }
];

const newData = [];

let body = document.body;

let table = document.createElement('table');

body.prepend(table);

let headerTr = document.createElement('tr');

for (key in data[0]) {
    let td = document.createElement('td');
    td.innerHTML = key;
    headerTr.append(td);
}

table.append(headerTr);

for (let i = 0; i < data.length; i++) {
    newData.push(Object.values(data[i]));
   
    let tr = document.createElement('tr');
    table.append(tr);

    for (let j = 0; j < newData[i].length; j++) {
        let td = document.createElement('td');
        td.innerHTML = newData[i][j];
        tr.append(td);
    }
}

