const userParametr = ['name', 'height', 'skin_color'];
let getPeopleBtn = document.querySelector('.getPeople');
let modalWrapper = document.querySelector('.modal_wrapper');
let leftCol = document.querySelector('.modal_wrapper .left_col');
let rightCol = document.querySelector('.modal_wrapper .right_col');

modalWrapper.addEventListener('click', (e) => {
    let modal = document.querySelector('.modal');
    if (e.target !== modal) {
        leftCol.innerHTML = '';
        modalWrapper.classList.remove('active');
    }
});

getPeopleBtn.addEventListener('click',  async (e) => {
   e.preventDefault();
   buildTable();
   let users = await getPeople();
   fillTable(users);
});

let getAdditionalUserTable = (mass, eyeColor, birthYear) => {
    let table = document.createElement('table');
    table.innerHTML = `
    <tr>
        <td>${mass}</td>
        <td>${eyeColor}</td>
        <td>${birthYear}</td>
    </tr>`;
    return table;
}

async function showModal(e) {
    let thisTr = e.target.closest('tr');
    if (thisTr.rowIndex === 0) return;
    let planetUrl = thisTr.dataset.planetUrl;
    let mass = thisTr.dataset.mass;
    let eyeColor = thisTr.dataset.eyeColor;
    let birthYear = thisTr.dataset.birthYear;
    let additionaUserInfoTable = getAdditionalUserTable(mass, eyeColor, birthYear);
    let planetInfoTable = await getPlanet(planetUrl);
    leftCol.append(additionaUserInfoTable);
    rightCol.append(planetInfoTable);
    modalWrapper.classList.add('active');
}

async function getPeople() {
    let usersResponse = await fetch('https://swapi.co/api/people');
    let users = (await usersResponse.json()).results;
    return users;
}

async function getPlanet(url) {
    let usersResponse = await fetch(url);
    let planet = await usersResponse.json();
    return planet;
}

function buildTable() {
    let table = document.createElement('table');
    table.addEventListener('click', showModal);
    let tr = document.createElement('tr');
    userParametr.forEach((item) => {
        let th = document.createElement('th');
        th.innerHTML = item;
        tr.append(th);
    });
    table.classList.add('peopleTable');
    table.append(tr);
    document.body.prepend(table);
}

function fillTable(users) {
    users.forEach(item => {
        let tr = document.createElement('tr');
        tr.dataset.mass = item.mass;
        tr.dataset.eyeColor = item.eye_color;
        tr.dataset.birthYear = item.birth_year;
        tr.dataset.planetUrl = item.homeworld;
        userParametr.forEach((el) => {
            let td = document.createElement('td');
            let text = item[el];
            td.innerHTML = text;
            tr.append(td);
        });
        let table = document.querySelector('.peopleTable');
        table.append(tr);
    });
}

