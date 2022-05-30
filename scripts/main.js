let arrayContainer = document.getElementById('array-wrapper');
let arraySizeInput = document.getElementById('array-size');
let arraySize = arraySizeInput.value;
let arrayDivs= [], arrayDivsHeight = [];
let arrayShuffle = document.getElementById('array-shuffle');
let arrayUpdateSpeedInput = document.getElementById('array-update-speed');

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

const updateArraySize = () => {
    arraySize = arraySizeInput.value;
    generateArray();
}

arrayShuffle.addEventListener("click",generateArray);
arraySizeInput.addEventListener("input",updateArraySize);

window.onload = updateArraySize();