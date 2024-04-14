#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 280,
    EUR: 0.91,
    GBP: 0.87,
    INR: 74.57,
};
let answers = await inquirer.prompt([
    {
        name: "fromCurrency",
        message: "Select which currency you want to convert?",
        type: "list",
        choices: ["USD", "PKR", "EUR", "GBP", "INR"],
    },
    {
        name: "toCurrency",
        type: "list",
        message: "Select which currency you want to convert to?",
        choices: ["USD", "PKR", "EUR", "GBP", "INR"],
    },
    {
        name: "takeAmount",
        type: "number",
        message: "Enter Amount ",
    },
]);
let from = currency[answers.fromCurrency];
let to = currency[answers.toCurrency];
let amount = answers.takeAmount;
let result = (amount / from) * to;
console.log(result);
