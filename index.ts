import inquirer from "inquirer";
let balance = 10000;
let myPin = 1308;
let user_pin = await inquirer.prompt({
  name: "pin",
  message: "Enter your pin",
  type: "number",
});
// console.log("correct pin")
if (user_pin.pin === myPin) {
  let options = await inquirer.prompt({
    name: "optionsToSelect",
    type: "list",
    message: "Select operation you want to perform",
    choices: ["Withdraw", "checkBalance", "fastCash"],
  });
  if (options.optionsToSelect === "Withdraw") {
    let withdrawalAmount = await inquirer.prompt({
      name: "amount",
      type: "number",
      message: "Enter the amount you want to withdraw",
    });
  }
  
} else {
  console.log("invalid password");
}
