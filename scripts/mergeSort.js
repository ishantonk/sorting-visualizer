let merge = document.getElementById("mergeSort");
let mobileMerge = document.getElementById("mobile-mergeSort");
merge.addEventListener("click", mergeSort);
mobileMerge.addEventListener("click", mobileMergeSort);

function mobileMergeSort() {
    toggleMenu();
    mergeSort();
}


function mergeSort() {
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(N)";

    cDelay = 0;

    merge_partition(0, arraySize - 1);

    // enable_buttons();
}

function merge_sort(start, mid, end) {
    var p = start, q = mid + 1;

    var Arr = [], k = 0;

    for (var i = start; i <= end; i++) {
        if (p > mid) {
            Arr[k++] = arrayDivsHeight[q++];
            stepUpdate(arrayDivs[q - 1], arrayDivsHeight[q - 1], "red");//Color update
        }
        else if (q > end) {
            Arr[k++] = arrayDivsHeight[p++];
            stepUpdate(arrayDivs[p - 1], arrayDivsHeight[p - 1], "red");//Color update
        }
        else if (arrayDivsHeight[p] < arrayDivsHeight[q]) {
            Arr[k++] = arrayDivsHeight[p++];
            stepUpdate(arrayDivs[p - 1], arrayDivsHeight[p - 1], "red");//Color update
        }
        else {
            Arr[k++] = arrayDivsHeight[q++];
            stepUpdate(arrayDivs[q - 1], arrayDivsHeight[q - 1], "red");//Color update
        }
    }

    for (var t = 0; t < k; t++) {
        arrayDivsHeight[start++] = Arr[t];
        stepUpdate(arrayDivs[start - 1], arrayDivsHeight[start - 1], "green");//Color update
    }
}

function merge_partition(start, end) {
    if (start < end) {
        var mid = Math.floor((start + end) / 2);
        stepUpdate(arrayDivs[mid], arrayDivsHeight[mid], "yellow");//Color update

        merge_partition(start, mid);
        merge_partition(mid + 1, end);

        merge_sort(start, mid, end);
    }
}