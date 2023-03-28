// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

import { bankAccounts } from "../data/data"


export function getClientsWithLetterInName(array, letter) {
    // Your code goes here...
    let AccountHolder = []
    let charFromName = '';
    for (let BankObject of array) {
        console.log(BankObject, BankObject.name)
        for (let name of BankObject.name) {
            console.log(name)
            if (name.toLowerCase() === letter) {
                AccountHolder.push(BankObject.name)
                console.log(AccountHolder, letter)
            }
        }





    }


    return AccountHolder
}






// account is what now stores the current backaccount object
// why are you using the bankAccounts variable here?
// you have the array passed as the argument, use it instead


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function