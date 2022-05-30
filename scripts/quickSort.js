let quick = document.getElementById("quickSort");
let mobileQuick = document.getElementById("mobile-quickSort");
quick.addEventListener("click", quickSort);
mobileQuick.addEventListener("click", mobileQuickSort);

function mobileQuickSort() {
    toggleMenu();
    quickSort();
}


function quickSort() {
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(log N)";

    cDelay = 0;

    quick_sort(0, arraySize - 1);

    // enable_buttons();
}

function quick_partition(start, end) {
    var i = start + 1;
    var piv = arrayDivsHeight[start];//make the first element as pivot element.
    stepUpdate(arrayDivs[start], arrayDivsHeight[start], "yellow");//Color update

    for (var j = start + 1; j <= end; j++) {
        //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
        if (arrayDivsHeight[j] < piv) {
            stepUpdate(arrayDivs[j], arrayDivsHeight[j], "yellow");//Color update

            stepUpdate(arrayDivs[i], arrayDivsHeight[i], "red");//Color update
            stepUpdate(arrayDivs[j], arrayDivsHeight[j], "red");//Color update

            var temp = arrayDivsHeight[i];
            arrayDivsHeight[i] = arrayDivsHeight[j];
            arrayDivsHeight[j] = temp;

            stepUpdate(arrayDivs[i], arrayDivsHeight[i], "red");//Height update
            stepUpdate(arrayDivs[j], arrayDivsHeight[j], "red");//Height update

            stepUpdate(arrayDivs[i], arrayDivsHeight[i], "turquoise");//Height update
            stepUpdate(arrayDivs[j], arrayDivsHeight[j], "turquoise");//Height update

            i += 1;
        }
    }
    stepUpdate(arrayDivs[start], arrayDivsHeight[start], "red");//Color update
    stepUpdate(arrayDivs[i - 1], arrayDivsHeight[i - 1], "red");//Color update

    var temp = arrayDivsHeight[start];//put the pivot element in its proper place.
    arrayDivsHeight[start] = arrayDivsHeight[i - 1];
    arrayDivsHeight[i - 1] = temp;

    stepUpdate(arrayDivs[start], arrayDivsHeight[start], "red");//Height update
    stepUpdate(arrayDivs[i - 1], arrayDivsHeight[i - 1], "red");//Height update

    for (var t = start; t <= i; t++) {
        stepUpdate(arrayDivs[t], arrayDivsHeight[t], "green");//Color update
    }

    return i - 1;//return the position of the pivot
}

function quick_sort(start, end) {
    if (start < end) {
        //stores the position of pivot element
        var piv_pos = quick_partition(start, end);
        quick_sort(start, piv_pos - 1);//sorts the left side of pivot.
        quick_sort(piv_pos + 1, end);//sorts the right side of pivot.
    }
}