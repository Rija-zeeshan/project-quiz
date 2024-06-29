#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to my adventure quiz game:");
console.log("you are required to gain maximum 4 points for the window.");
let points = 0;
//question 1
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "typescript is a superset off?",
        type: "list",
        choices: ["python", "c++", "java", "javascript"]
    }
]);
if (question1.one == "javascript") {
    console.log("your answere is correct");
    points++;
}
else {
    console.log("incorrect answere");
}
//question 2
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "who is the founder of micresoft?",
        type: "list",
        choices: ["elon musk", "bill gates", "mark", "graham bell"]
    }
]);
if (question2.two == "bill gates") {
    console.log("your answere is correct");
    points++;
}
else {
    console.log("incorrect answere");
}
//question 3
let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "capital of pakistan",
        type: "list",
        choices: ["karachi", "punjab", "islamabad", "kpk"]
    }
]);
if (question3.three == "islamabad") {
    console.log("your answere is correct");
    points++;
}
else {
    console.log("incorrect answere");
}
//question 4
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "who is the current governer of sindh",
        type: "list",
        choices: ["Ali", "Kamran Tassori", "Bilal", "wajahat"]
    }
]);
if (question4.four == "Kamran Tassori") {
    console.log("your answere is correct");
    points++;
}
else {
    console.log("incorrect answere");
}
//question 5
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "Typescript is a",
        type: "list",
        choices: ["Strongly typed", "Object oriented", "Compiled language", "All of the above"]
    }
]);
if (question5.five == "All of the above") {
    console.log("your answere is correct");
    points++;
}
else {
    console.log("incorrect answere");
}
//output conditions
if (points >= 4) {
    console.log("Congratulations");
    console.log(`your points: ${points}`);
}
else {
    console.log("you loss! try next time");
    console.log(`your points: ${points}`);
}
