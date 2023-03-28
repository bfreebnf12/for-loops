// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

import { bankAccounts } from "../data/data"

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
    // Your code goes here...
    let sumOfBankAccounts = []
    for (let i = 0; i < bankAccounts.length; i++) {
        if (bankAccounts[i].hasOwnProperty('deposits') && bankAccounts[i].deposits.reduce((b, a) => b + a, 0) < 2000) {
            sumOfBankAccounts.push(bankAccounts[i])
        } else if (!bankAccounts[i].hasOwnProperty('deposits')) {
            sumOfBankAccounts.push(bankAccounts[i])
        }
    }
    return sumOfBankAccounts
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function