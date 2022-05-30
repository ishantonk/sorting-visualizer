let heap = document.getElementById("heapSort");
heap.addEventListener("click", heapSort);

function heapSort()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N log N)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    cDelay=0;

    heap_sort();
    
    // enable_buttons();
}

function swap(i,j)
{
    stepUpdate(arrayDivs[i],arrayDivsHeight[i],"red");//Color update
    stepUpdate(arrayDivs[j],arrayDivsHeight[j],"red");//Color update

    var temp=arrayDivsHeight[i];
    arrayDivsHeight[i]=arrayDivsHeight[j];
    arrayDivsHeight[j]=temp;

    stepUpdate(arrayDivs[i],arrayDivsHeight[i],"red");//Height update
    stepUpdate(arrayDivs[j],arrayDivsHeight[j],"red");//Height update

    stepUpdate(arrayDivs[i],arrayDivsHeight[i],"turquoise");//Color update
    stepUpdate(arrayDivs[j],arrayDivsHeight[j],"turquoise");//Color update
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && arrayDivsHeight[l]>arrayDivsHeight[largest])
    {
        if(largest!=i)
        {
            stepUpdate(arrayDivs[largest],arrayDivsHeight[largest],"turquoise");//Color update
        }

        largest=l;

        stepUpdate(arrayDivs[largest],arrayDivsHeight[largest],"red");//Color update
    }

    if(r<n && arrayDivsHeight[r]>arrayDivsHeight[largest])
    {
        if(largest!=i)
        {
            stepUpdate(arrayDivs[largest],arrayDivsHeight[largest],"turquoise");//Color update
        }

        largest=r;

        stepUpdate(arrayDivs[largest],arrayDivsHeight[largest],"red");//Color update
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(arraySize/2)-1;i>=0;i--)
    {
        max_heapify(arraySize,i);
    }

    for(var i=arraySize-1;i>0;i--)
    {
        swap(0,i);
        stepUpdate(arrayDivs[i],arrayDivsHeight[i],"green");//Color update
        stepUpdate(arrayDivs[i],arrayDivsHeight[i],"yellow");//Color update

        max_heapify(i,0);

        stepUpdate(arrayDivs[i],arrayDivsHeight[i],"turquoise");//Color update
        stepUpdate(arrayDivs[i],arrayDivsHeight[i],"green");//Color update
    }
    stepUpdate(arrayDivs[i],arrayDivsHeight[i],"green");//Color update
}