#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.bold.greenBright("\n\tTODO-LIST\n"));
// while(condition){
//     let addTask = await inquirer.prompt([
//         {
//             name:"task",
//             type:"input",
//             message: chalk.blackBright("Enter your task:")
//         }
//     ]);
//     todoList.push(addTask.task);
//     console.log(`${addTask.task} Task added sucessfully`);
//     let addMoreTask = await inquirer.prompt([
//         {
//             name:"addMore",
//             type:"confirm",
//             message: chalk.blackBright("Do you want to add more task?"),
//             default: false
//         }
//     ])
//     condition = addMoreTask.addMore
// }
// console.log("Your updated todo-list:", todoList);
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.whiteBright("Select an option you want to do:"),
                choices: ["Add Task", "update task", "Remove Task", "View Todo-list", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "update task") {
            await updateTask();
        }
        else if (option.choice === "Remove Task") {
            await removeTask();
        }
        else if (option.choice === "View Todo-list") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.whiteBright("Enter your task:"),
        }
    ]);
    todoList.push(newTask.task);
    console.log(chalk.blackBright(`\n${newTask.task} Task added in todo-list successfully`));
};
let viewTask = () => {
    console.log(chalk.bold.greenBright("\nYour TODO-List:\n"));
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
let removeTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.whiteBright("Enter the 'index' of task you want to remove:")
        }
    ]);
    let removeTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(chalk.blackBright(`\n${removeTask} Task removed from todo-list successfully`));
};
let updateTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.whiteBright("Enter the 'index' of task you want to update:")
        }
    ]);
    let updateTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.whiteBright("Enter your updated task:")
        }
    ]);
    todoList[taskIndex.index - 1] = updateTask.task;
    console.log(chalk.blackBright(`\n${updateTask.task} Task updated in todo-list successfully`));
};
main();
