let bubble = document.getElementById("bubbleSort");
bubble.addEventListener("click", bubbleSort);

function bubbleSort() {
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    cDelay = 0;

    for (var i = 0; i < arraySize - 1; i++) {
        for (var j = 0; j < arraySize - i - 1; j++) {
            stepUpdate(arrayDivs[j], arrayDivsHeight[j], "yellow");//Color update

            if (arrayDivsHeight[j] > arrayDivsHeight[j + 1]) {
                stepUpdate(arrayDivs[j], arrayDivsHeight[j], "red");//Color update
                stepUpdate(arrayDivs[j + 1], arrayDivsHeight[j + 1], "red");//Color update

                var temp = arrayDivsHeight[j];
                arrayDivsHeight[j] = arrayDivsHeight[j + 1];
                arrayDivsHeight[j + 1] = temp;

                stepUpdate(arrayDivs[j], arrayDivsHeight[j], "red");//Height update
                stepUpdate(arrayDivs[j + 1], arrayDivsHeight[j + 1], "red");//Height update
            }
            stepUpdate(arrayDivs[j], arrayDivsHeight[j], "turquoise");//Color update
        }
        stepUpdate(arrayDivs[j], arrayDivsHeight[j], "green");//Color update
    }
    stepUpdate(arrayDivs[0], arrayDivsHeight[0], "green");//Color update

    // enable_buttons();
}