// Selector
// id: #
// tag name: tagName
// class: .

/* Truy cập thông qua id */
const titleById = document.getElementById('title');
const titleByClass = document.getElementsByClassName('title');
console.log('Title by id:', titleById);
console.log('Title by class:', titleByClass);

// Query selector

const titleByQuerySelector = document.querySelectorAll('.title');
console.log('🚀 ~ titleByQuerySelector:', titleByQuerySelector);

const titleByQuerySelector2 = document.querySelector('p.title');
console.log('🚀 ~ titleByQuerySelector2:', titleByQuerySelector2);

titleById.innerHTML = 'Bài học về DOM trong HTML';
titleById.className = 'title super-title';
titleById.style.color = 'red';

// CRUD

// C - Create
// R - Read (tìm kiếm, đọc)
// U - Update (cập nhật)
// D - Delete (xóa)

const footerNode = document.querySelector('footer');
const aElement = document.createElement('a');
console.log('🚀 ~ aElement before:', aElement);
aElement.innerHTML = 'Link to google';
aElement.href = 'https://gooogle.com';
console.log('🚀 ~ aElement after:', aElement);

footerNode.appendChild(aElement);
console.log('🚀 ~ footerNode:', footerNode);
footerNode.removeChild(aElement);

const todoData = [
  'Đánh răng',
  'Đi học',
  'Ăn trưa',
  'Tập thể dục',
  'Ăn tối',
  'Đọc sách',
  'Đi ngủ',
];

// Cách 1
const fetchDataButtonNode = document.querySelector('#fetch-data-btn');

function fetchTodoListData() {
  const ulNode = document.querySelector('ul.todos');

  for (let i = 0; i < todoData.length; i++) {
    const liElement = document.createElement('li');
    liElement.innerHTML = todoData[i];
    ulNode.appendChild(liElement);
  }

  fetchDataButtonNode.innerHTML = ' Đã load dữ liệu thành công';
}

// fetchDataButtonNode.addEventListener('dblclick', fetchTodoListData);

// Next lesson: Form + Clock (event bubbling + event capturing, setTimeout, setInterval)

localStorage.setItem('language', 'english');
localStorage.setItem('currency', 'vnd');
localStorage.removeItem('isAuthenticated');
localStorage.setItem('timezone', 'GMT+9');

const timezone = localStorage.getItem('timezone');
console.log('Timezone:', timezone);

const timezoneElement = document.createElement('h2');
timezoneElement.innerHTML = timezone;

footerNode.appendChild(timezoneElement);

// localStorage.clear();

// Timer

console.log('Before setTimeOut'); // 1

const timer = setTimeout(function() {
  console.log('During setTimeOut'); // 2
}, 300);

clearTimeout(timer);

console.log('After setTimeOut'); // 3


const countTime = document.getElementById('count-time');
let date  = new Date();
let min = date.getMinutes();
let sec = date.getSeconds();

const formatTimer = (num) => {
  if (num < 10) {
    return '0' + num;
  }
  return num;
}

setInterval(function() {
  sec = sec + 1;
  if (sec >= 60) {
    sec = 0;
    min = min + 1;
  }

  if (sec < 10) {
    
  }

  countTime.innerHTML = `Current time: ${formatTimer(min)} : ${formatTimer(sec)}`
}, 100)


// Event Bubbling hay Event Capturing
const p = document.getElementById('myP')
const div = document.getElementById('myDiv')

div.addEventListener('click', function() {
  console.log('div clicked')
}, true)

p.addEventListener('click', function() {
  console.log('p clicked')
}, true)