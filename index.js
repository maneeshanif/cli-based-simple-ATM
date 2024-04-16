#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright.bold.bgWhiteBright.underline('\t\t\t\t\t\t Auto Teller Machine'));
console.log(chalk.yellowBright('\nDeveloped By:'));
console.log(chalk.greenBright.underline("\tAnees Hanif"));
console.log("\n");
let balance = 10000;
let myPin = 1308;
let user_pin = await inquirer.prompt({
    name: "pin",
    message: chalk.blueBright("Enter your pin"),
    type: "number",
});
if (user_pin.pin === myPin) {
    let options = await inquirer.prompt({
        name: "optionsToSelect",
        type: "list",
        message: chalk.red("Select operation you want to perform"),
        choices: ["Withdraw", "checkBalance", "fastCash"],
    });
    if (options.optionsToSelect === "Withdraw") {
        let withdrawalAmount = await inquirer.prompt([
            {
                name: "Amount",
                type: "number",
                message: chalk.yellowBright("Enter the amount you want to withdraw"),
            },
        ]);
        if (withdrawalAmount.Amount > balance) {
            console.log(chalk.redBright.overline("Insufficient Balance!"));
        }
        else {
            balance -= withdrawalAmount.Amount;
            console.log(chalk.cyanBright.bold(`Your remaining amount is ${balance}`));
        }
    }
    else if (options.optionsToSelect === "checkBalance") {
        console.log(chalk.magenta(balance));
    }
    else if (options.optionsToSelect === "fastCash") {
        let Quick_cash = await inquirer.prompt({
            name: "FastCash",
            type: "list",
            message: chalk.red.bgGreenBright("plese select one of the following"),
            choices: ["100", "500", "1000", "5000"],
        });
        if (Quick_cash.FastCash === "100") {
            balance -= 100;
            console.log(chalk.greenBright.italic.bold `your remaing balance is ${balance}`);
        }
        else if (Quick_cash.FastCash === "500") {
            balance -= 500;
            console.log(chalk.greenBright.italic.bgYellowBright.bold `your remaing balance is ${balance}`);
        }
        else if (Quick_cash.FastCash === "1000") {
            balance -= 1000;
            console.log(chalk.greenBright.italic.bgYellowBright.bold `your remaing balance is ${balance}`);
        }
        else {
            balance -= 5000;
            console.log(chalk.greenBright.italic.bgYellowBright.bold `your remaing balance is ${balance}`);
        }
    }
}
else {
    console.log(chalk.underline.red.bold("Invalid password !!!"));
}
