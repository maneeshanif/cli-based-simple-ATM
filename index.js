import inquirer from "inquirer";
let balance = 10000;
let myPin = 1308;
let userAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: " number"
    }
]);
console.log("correct pin");
if (userAnswer.pin === myPin) {
    let options = await inquirer.prompt([
        {
            name: "optionsToSelect",
            type: "list",
            message: "Select operation you want to perform",
            choices: ["Withdraw", "checkBalance", "fastCash"],
        }
    ]);
    //   if (options.optionsToSelect === "Withdraw"){
    //    console.log("lll")
    //   }
}
