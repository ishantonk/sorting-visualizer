let insertion = document.getElementById("insertionSort");
let mobileInsertion = document.getElementById("mobile-insertionSort");
insertion.addEventListener("click", insertionSort);
mobileInsertion.addEventListener("click", mobileInsertionSort);

function mobileInsertionSort() {
    toggleMenu();
    insertionSort();
}

function insertionSort() {
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    cDelay = 0;

    for (var j = 0; j < arraySize; j++) {
        stepUpdate(arrayDivs[j], arrayDivsHeight[j], "yellow");//Color update

        var key = arrayDivsHeight[j];
        var i = j - 1;
        while (i >= 0 && arrayDivsHeight[i] > key) {
            stepUpdate(arrayDivs[i], arrayDivsHeight[i], "red");//Color update
            stepUpdate(arrayDivs[i + 1], arrayDivsHeight[i + 1], "red");//Color update

            arrayDivsHeight[i + 1] = arrayDivsHeight[i];

            stepUpdate(arrayDivs[i], arrayDivsHeight[i], "red");//Height update
            stepUpdate(arrayDivs[i + 1], arrayDivsHeight[i + 1], "red");//Height update

            stepUpdate(arrayDivs[i], arrayDivsHeight[i], "turquoise");//Color update
            if (i == (j - 1)) {
                stepUpdate(arrayDivs[i + 1], arrayDivsHeight[i + 1], "yellow");//Color update
            }
            else {
                stepUpdate(arrayDivs[i + 1], arrayDivsHeight[i + 1], "turquoise");//Color update
            }
            i -= 1;
        }
        arrayDivsHeight[i + 1] = key;

        for (var t = 0; t < j; t++) {
            stepUpdate(arrayDivs[t], arrayDivsHeight[t], "green");//Color update
        }
    }
    stepUpdate(arrayDivs[j - 1], arrayDivsHeight[j - 1], "green");//Color update

    // enable_buttons();
}