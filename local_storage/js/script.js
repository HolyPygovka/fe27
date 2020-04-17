const firstName = localStorage.getItem('firstName');
const secondName = localStorage.getItem('secondName');
const age = localStorage.getItem('age');

let inputName = document.getElementById('inputName');
let inputSecondName = document.getElementById('inputSecondName');
let inputAge = document.getElementById('inputAge');
let resetButton = document.querySelector('button[type="reset"]');

inputName.value = firstName;
inputSecondName.value = secondName;
inputAge.value = age;


inputName.addEventListener('input', (e) => {
    localStorage.setItem('firstName', e.target.value);
});

inputSecondName.addEventListener('input', (e) => {
    localStorage.setItem('secondName', e.target.value);
});

inputAge.addEventListener('input', (e) => {
    localStorage.setItem('age', e.target.value);
});

resetButton.addEventListener('click', () => {
    localStorage.clear();
});



