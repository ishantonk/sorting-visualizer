var speed = 1000;

arrayUpdateSpeedInput.addEventListener("input", animationSpeed);
function animationSpeed() {
    var arrayUpdateSpeed = arrayUpdateSpeedInput.value;
    switch (parseInt(arrayUpdateSpeed)) {
        case 1: speed = 1;
            break;
        case 2: speed = 10;
            break;
        case 3: speed = 100;
            break;
        case 4: speed = 1000;
            break;
        case 5: speed = 10000;
            break;
    }

    delayTime = 10000 / (Math.floor(arraySize / 10) * speed);        //Decrease numerator to increase speed.
};

var delayTime = 10000 / (Math.floor(arraySize / 10) * speed);        //Decrease numerator to increase speed.
var cDelay = 0;//This is updated on every div change so that visualization is visible.

function stepUpdate(element, height, color) {
    window.setTimeout(function () {
        element.style.height = height / 10 + '%';
        element.style.backgroundColor = color;
    }, cDelay += delayTime);
};
