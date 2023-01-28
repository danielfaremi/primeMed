// This function uses a variable "direction" to store the direction of the sequence (increasing, decreasing or constant) and then checks if the direction of the sequence changes. 
// If the direction changes, it returns false, otherwise, it returns true.


function isMonotonic(arr: number[]): boolean {
    if (arr.length <= 2) {
        return true;
    }

    let direction = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (direction === 0) {
            direction = arr[i] - arr[i - 1];
            continue;
        }
        if ((arr[i] - arr[i - 1] > 0 && direction < 0) || (arr[i] - arr[i - 1] < 0 && direction > 0)) {
            return false;
        }
    }
    return true;
}


console.log(isMonotonic([1, 2, 3, 4])); // Output: true
console.log(isMonotonic([10, 3, 4, 6])); // Output: false
console.log(isMonotonic([9])); // Output: true
