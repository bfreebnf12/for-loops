// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]



export function getAllAccountsWithSumsOfDepositsLess2000(array) {
    // Your code goes here...
    let arrayOfBankAccounts = []
    for (let i = 0; i < array.length; i++) {
        let sum = 0;
        //console.log(arrayOfBankAccounts)
        if (array[i].deposits !== undefined) {
            for (let j = 0; j < array[i].deposits.length; j++) {
                console.log(array[i].deposits[j])
                    //console.log(deposits)
                sum += array[i].deposits[j]
            }
            //console.log(arrayOfBankAccounts)
        }

        if (sum < 2000) {
            arrayOfBankAccounts.push(array[i])

            //console.log(arrayOfBankAccounts)
        }

        //console.log(arrayOfBankAccounts)
    }
    return arrayOfBankAccounts
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function