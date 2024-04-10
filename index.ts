import inquirer from "inquirer";
let balance = 10000;
let myPin = 1308;
let user_pin = await inquirer.prompt({
  name: "pin",
  message: "Enter your pin",
  type: "number",
});

if (user_pin.pin === myPin) {
  let options = await inquirer.prompt({
    name: "optionsToSelect",
    type: "list",
    message: "Select operation you want to perform",
    choices: ["Withdraw", "checkBalance", "fastCash"],
  });
  if (options.optionsToSelect === "Withdraw") {
    let withdrawalAmount: any = await inquirer.prompt([
      {
        name: "Amount",
        type: "number",
        message: "Enter the amount you want to withdraw",
      },
    ]);
    if (withdrawalAmount.Amount > balance) {
      console.log("Insufficient Balance!");
    } else {
      balance -= withdrawalAmount.Amount;
      console.log(`your remaining amount is ${balance}`);
    }
  } else if (options.optionsToSelect === "checkBalance") {
    console.log(balance);
  } else if(options.optionsToSelect === "fastCash"){
    let Quick_cash = await inquirer.prompt({
      name : "FastCash",
      type : "list",
      message : "plese select one of the following",
      choices : ["100","500","1000","5000"],
    });
    if(Quick_cash.FastCash === "100"){
      balance -= 100;
      console.log(`your remaing balance is ${balance}`);
    }else if(Quick_cash.FastCash === "500"){
      balance -= 500;
      console.log(`your remaing balance is ${balance}`);
    }else if(Quick_cash.FastCash === "1000"){
      balance -= 1000;
      console.log(`your remaing balance is ${balance}`);
    }else {
      balance -= 5000;
      console.log(`your remaing balance is ${balance}`);
    }
  }

} else {
  console.log("invalid password");
}
