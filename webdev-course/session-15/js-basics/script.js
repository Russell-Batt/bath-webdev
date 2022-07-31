let button = document.querySelector("#btn");
button.addEventListener("click", toggleClass);

const boxElement = document.getElementById('box');

function toggleClass() {
    if (boxElement.classList.contains('test')) {
        boxElement.classList.remove('test');
        console.log(boxElement);
    } else {
        boxElement.classList.add('test');
        console.log(boxElement);
    }
}

const a = 'some text';
const b = 'some different text';
const x = 5;
const y = 6;

function showVariable() {
    document.getElementById('output').innerHTML = a;
}

function changeVariable() {
    document.getElementById('output').innerHTML = b;
}

function calculate() {
    document.getElementById('output').innerHTML = x * y;
}


const numbers = 
    [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let total = 0;

function addNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    document.getElementById('output').innerHTML = (total)
}

function clearOutput() {
    document.getElementById("output").innerHTML = "";
}