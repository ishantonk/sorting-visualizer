let selection = document.getElementById("selectionSort");
selection.addEventListener("click", selectionSort);

function selectionSort() {
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N^2)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    cDelay = 0;

    for (var i = 0; i < arraySize - 1; i++) {
        stepUpdate(arrayDivs[i], arrayDivsHeight[i], "red");//Color update

        index_min = i;

        for (var j = i + 1; j < arraySize; j++) {
            stepUpdate(arrayDivs[j], arrayDivsHeight[j], "yellow");//Color update

            if (arrayDivsHeight[j] < arrayDivsHeight[index_min]) {
                if (index_min != i) {
                    stepUpdate(arrayDivs[index_min], arrayDivsHeight[index_min], "turquoise");//Color update
                }
                index_min = j;
                stepUpdate(arrayDivs[index_min], arrayDivsHeight[index_min], "red");//Color update
            }
            else {
                stepUpdate(arrayDivs[j], arrayDivsHeight[j], "turquoise");//Color update
            }
        }

        if (index_min != i) {
            var temp = arrayDivsHeight[index_min];
            arrayDivsHeight[index_min] = arrayDivsHeight[i];
            arrayDivsHeight[i] = temp;

            stepUpdate(arrayDivs[index_min], arrayDivsHeight[index_min], "red");//Height update
            stepUpdate(arrayDivs[i], arrayDivsHeight[i], "red");//Height update
            stepUpdate(arrayDivs[index_min], arrayDivsHeight[index_min], "turquoise");//Color update
        }
        stepUpdate(arrayDivs[i], arrayDivsHeight[i], "green");//Color update
    }
    stepUpdate(arrayDivs[i], arrayDivsHeight[i], "green");//Color update

    // enable_buttons();
}