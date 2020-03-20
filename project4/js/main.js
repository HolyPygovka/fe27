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
let body = document.body;
let table;
const newData = [];
let addBtn = document.querySelector('.add');
for (let i = 0; i < data.length; i++) {   
    newData.push(Object.values(data[i]));
}

const removeTable = () => {
    table.remove();
}
const fillTable = (newData) => {
    for (let i = 0; i < newData.length; i++) {   
        let tr = document.createElement('tr');
        table.append(tr);
    
        for (let j = 0; j < newData[i].length; j++) {
            let td = document.createElement('td');
            td.innerHTML = newData[i][j];
            tr.append(td);
        }
    }
}
const createTable = () => {
    table = document.createElement('table');
    body.prepend(table);
    /* headerTr */
    let headerTr = document.createElement('tr');
    for (key in data[0]) {
        let td = document.createElement('td');
        td.innerHTML = key;
        headerTr.append(td);
    }
    table.append(headerTr);
    /* END headerTr */
}

createTable();
fillTable(newData);

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let oneUserArr = [];

    let userName = prompt('Vvedite user name');
    oneUserArr.push(userName);

    let userSecondName = prompt('Vvedite user second name');
    oneUserArr.push(userSecondName);

    let userAge = +prompt('Vvedite user age');
    oneUserArr.push(userAge);

    newData.push(oneUserArr);
    
    removeTable();
    createTable();
    fillTable(newData);
});


