// EXERCISE 3
// Return the average value for the given array of numbers, f.i.
// getAverage([22, 45, 4, 65]) => 34

export function getAverage(array) {
    // Your code goes here...
    let sum = array[0];

    for (let i = 1; i < array.length; i++) {
        sum += array[i]
        console.log(sum)




    }
    let average = sum / array.length
    return average
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function