// Part 1: Greeting
const amButton = document.getElementById('am');
const pmButton = document.getElementById('pm');
const greeting = document.getElementById('greeting');

amButton.addEventListener('click', () => {
    greeting.textContent = 'Good morning';
}); // am

pmButton.addEventListener('click', () => {
    greeting.textContent = 'Good night';
}); // pm

// Part 2: Switch Background Color
const redButton = document.getElementById('red');
const yellowButton = document.getElementById('yellow');
const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');
const color = document.getElementById('div_color');

redButton.addEventListener('click', () => {
    color.setAttribute('class', 'bg_red');
}); // red

yellowButton.addEventListener('click', () => {
    color.setAttribute('class', 'bg_yellow');
}); // yellow

greenButton.addEventListener('click', () => {
    color.setAttribute('class', 'bg_green');
}); // green

blueButton.addEventListener('click', () => {
    color.setAttribute('class', 'bg_blue');
}); // blue

// Part 3: Creating a dynamic list
const input = document.querySelector('#usrInput');
const addButton = document.querySelector('#addBtn');
const ul = document.querySelector('#myUL');

addButton.addEventListener('click', () => {
    const myItem = input.value;

    if (myItem !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = myItem;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn'; 
        listItem.appendChild(deleteButton);
        ul.appendChild(listItem);
        input.value = ''; // clears input box after entering an itemn

        deleteButton.addEventListener('click', () => {
            ul.removeChild(listItem);
        }); // delete
    } // if
}); // add
