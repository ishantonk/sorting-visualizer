let arrayContainer = document.getElementById('array-wrapper');
let arraySizeInput = document.getElementById('array-size');
let mobileArraySizeInput = document.getElementById('mobile-array-size');
let arraySize = arraySizeInput.value;
let arrayDivs= [], arrayDivsHeight = [];
let arrayShuffle = document.getElementById('array-shuffle');
let mobileArrayShuffle = document.getElementById('mobile-array-shuffle');
let arrayUpdateSpeedInput = document.getElementById('array-update-speed');

let mobileMenu = document.getElementById('mobile-menu');
let mobileMenuToggle = document.getElementById('mobile-menu-toggle');

mobileMenuToggle.addEventListener('click', toggleMenu);

function toggleMenu() {
    mobileMenu.classList.toggle('translate-y-0');
}

// Function to generate random number.
const randomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
}

// Function to generate Array with random number.
const generateArray = () => {
    arrayContainer.innerHTML='';

    for (let index = 0; index < arraySize; index++) {
        arrayDivsHeight[index] = randomNumber(5, 899);
        arrayDivs[index] = document.createElement('div');
        arrayDivs[index].style.height = arrayDivsHeight[index]/10 + '%';
        arrayDivs[index].classList.add('array-bar', 'flex', 'flex-1', 'm-0.5', 'rounded-b-lg');
        arrayDivs[index].style.backgroundColor = 'turquoise';
        arrayContainer.appendChild(arrayDivs[index]);
    }
}

function mobileGenerateArray() {
    toggleMenu();
    generateArray();
}

const updateArraySize = () => {
    arraySize = arraySizeInput.value;
    generateArray();
}

function mobileUpdateArraySize() {
    arraySize = mobileArraySizeInput.value;
    generateArray();
}

arrayShuffle.addEventListener("click",generateArray);
mobileArrayShuffle.addEventListener("click", mobileGenerateArray);
arraySizeInput.addEventListener("input",updateArraySize);
mobileArraySizeInput.addEventListener("input", mobileUpdateArraySize);

window.onload = updateArraySize();