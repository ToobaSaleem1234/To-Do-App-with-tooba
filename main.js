#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = "true";
console.log(chalk.yellowBright.bold("\n \t Welcome to code with tooba--to do list \n"));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.bgBlue("Enter your New Task..")
        }
    ]);
    todos.push(addTask.task);
    console.log(`${addTask.task},task added in your list`);
    let moreTask = await inquirer.prompt([
        {
            name: "NewTask",
            type: "confirm",
            message: chalk.bgBlue("Do you want to add more Task??"),
            default: "false"
        }
    ]);
    condition = moreTask.NewTask;
}
console.log("Your new To Do list is:", { todos });
