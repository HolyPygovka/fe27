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
    }
];

const newData = [];

let body = document.body;

let table = body.querySelector('table');

for (let i = 0; i < data.length; i++) {
    newData.push(Object.values(data[i]));
   
    let tr = table.rows[i+1];
    let tdCollection = tr.cells;
    for (let j = 0; j < tdCollection.length; j++) {
        tdCollection[j].innerHTML = newData[i][j];
    }
}

let div = document.createElement('div');
div.classList.add('myDiv');
div.innerHTML = "<p>It's my div</p>"

let table = document.querySelector('table');
table.remove();
document.body.prepend(div);

console.log(div);