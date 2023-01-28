// This function uses the JavaScript Array.prototype.slice() method to extract subarrays 
// Array.prototype.concat() method to join them

function rotateArray(arr: number[], k: number): number[] {
    if (arr.length === 0) {
        return arr;
    }

    k = k % arr.length;
    // The modulo operator is used to handle the case where k is greater than the length of the array.
    return arr.slice(-k).concat(arr.slice(0, -k));
}

console.log(rotateArray([1, 2, 3], 2)) // Output: [3, 2, 1]
console.log(rotateArray([], 3)) // Output: []