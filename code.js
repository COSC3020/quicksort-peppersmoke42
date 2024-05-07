// As per the announcement added to Canvas, credit goes to ChatGPT
//    -ChatGPT provided the idea to use custom objects
//    -To be honest, that was about it. Why was this so much easier
//        than mergesort?
//    -It also helped with debugging

function quicksort(array) 
{
    if (array.length < 2)
        return array;
    
    let stack = [];
    stack.push({start: 0, end:array.length - 1});
    
    while (stack.length) 
    {
        let {start, end} = stack.shift();
        let pi = partition(array, start, end);

        if (start < pi - 1) // -> Less than pivot
            stack.push({start: start, end: pi - 1});
        if (end > pi + 1) // -> Greater than pivot
            stack.push({start: pi + 1, end: end});
    }

    return array;
}

// Swaps the elements at indices i and j
function swap(arr, i, j) 
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, low, high)
{
    let pivotIndex = Math.floor(Math.random() * (high - low + 1)) + low;
    let pivot = arr[pivotIndex];
    let i = low;

    // The loop doesn't compare the last element so that's where the pivot goes
    swap(arr, pivotIndex, high);
    for (let j = low; j < high; j++)
        if (arr[j] <= pivot) {
            swap(arr, i, j);
            i++;
        }
    
    // Put the pivot where it belongs
    swap(arr, i, high);
    return i;
}