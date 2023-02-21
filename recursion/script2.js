// Take an array, return sorted array
// Using recursive merge sort methodology
// Base case: Single element list vs single element list, a[0] vs b[0].
// The lower one gets added to new array. 
// If either side is empty, add all from the other side to the new array.

// We're working recursively with one parameter: array
// So each time we need to return only one (sorted) array
// And each recursive call needs to be able to take an array and sort it too
// I think with each step, let's divide the array into 2 and run recursive subcalls on each half.
// If array.length === 1, return array (it's already sorted)
// If array.length > 1,
// First we need to divide the array into 2. even is easy. odd: divide length by 2 and round up or down.
// Use array.splice on a copy of the array to easily split it into 2
// Mergesort these (recursively)
// Compare values and add the lower value to the sorted list

let list = [9, 6, 8, 5, 5, 4, 7, 2, 3, 1];

function mergeSort(array) {
    if (array.length === 1) return array

    let copy = array.slice();
    let sorted = [];

    // Split array into 2 and sort via recursive subcall
    let arrayOne = mergeSort(copy.splice(0, Math.floor(copy.length / 2)));
    let arrayTwo = mergeSort(copy);

    let i = 0, j = 0, k = 0;

    while (i < arrayOne.length && j < arrayTwo.length) {
        if (arrayOne[i] < arrayTwo[j]) {
            sorted[k++] = arrayOne[i++];
        } else if (arrayTwo[j] < arrayOne[i]) {
            sorted[k++] = arrayTwo[j++]
        } else {
            // If both numbers are equal, add both of them
            sorted[k++] = arrayOne[i++];
            sorted[k++] = arrayTwo[j++];
        }
    }

    // After one array empties, add all values in the other to sorted
    for (; i < arrayOne.length; i++) {
        sorted[k++] = arrayOne[i]
    }
    for (; j < arrayTwo.length; j++) {
        sorted[k++] = arrayTwo[j]
    }

    return sorted;
}

console.log(mergeSort(list))