const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + '(new change)';

const body = document.body;
body.querySelector('h1');

// const listItemElements = document.querySelectorAll('li'); // takes snapshot
const listItemElements = document.getElementsByTagName('li'); // live updates if li added

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}