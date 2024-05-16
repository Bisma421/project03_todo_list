#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList = [];
let condition = "true"

console.log(chalk.magentaBright.bold("\n\tTODO-LIST\n"));

while(condition){
    let addTask = await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message: chalk.blackBright("Enter your task:")
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added sucessfully`);

    let addMoreTask = await inquirer.prompt([
        {
            name:"addMore",
            type:"confirm",
            message: chalk.blackBright("Do you want to add more task?"),
            default: false
        }
    ])
    condition = addMoreTask.addMore
}
console.log("Your updated todo-list:", todoList);