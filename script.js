window.addEventListener('scroll', () => fix());

const header = document.querySelector('#header');
const fixed = header.offsetTop;

function fix() {
    if (window.pageYOffset >= fixed) {
        header.classList.add('fixedHeader');
    } else {
        header.classList.remove('fixedHeader');
    }
}
const input = document.querySelector('.input');
const addButton = document.querySelector('.addButton');

addButton.addEventListener('click', function() {
    addButton.classList.add('hover');
    addButton.addEventListener('animationend', function() {
        addButton.classList.remove('hover');
    });

    const rowsToAdd = parseInt(input.value);
    insert(rowsToAdd);
    input.value = '';
});

const myForm = document.querySelector('.myForm');
myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const rowsToAdd = parseInt(input.value);
    insert(rowsToAdd);
    input.value = '';    
});

const data = document.querySelector('.data');
let count = 6;

function johnDoeConstructor() {

    const ul = document.createElement('ul');

    const liIndex = document.createElement('li');
    const index = document.createTextNode(count);
    liIndex.appendChild(index);
    
    const liName = document.createElement('li');
    const name = document.createTextNode('Johnny Doe');
    liName.appendChild(name);
    
    const liPhone = document.createElement('li');
    const phone = document.createTextNode('123 456 789');
    liPhone.appendChild(phone);
    
    const liAge = document.createElement('li');
    const age = document.createTextNode('30');
    liAge.appendChild(age);
    
    ul.appendChild(liIndex);
    ul.appendChild(liName);
    ul.appendChild(liPhone);
    ul.appendChild(liAge);
    
    data.appendChild(ul);
    count++;
}

function insert(number) {
    for (let i = 0; i < number; i++) {
        johnDoeConstructor();
    }
}