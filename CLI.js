var fs = require('fs');
var inquirer = require('inquirer');
var BasicCard = require('./basicCard.js');
var ClozeCard = require('./clozeCard.js');

var cardType = process.argv[2];

if (cardType === "basic") {
    createBasic();
    function createBasic () {
        inquirer.prompt([
            {
                name: "front",
                message: "What question do you want to put on the flashcard?"
            }, {
                name: "back",
                message: "What is the answer to the question?"
            }, {
                type: "confirm",
                name: "other",
                message: "Would you like to create another?",
                default: false
            }
        ]).then(function (answers) {
            var front = answers.front;
            var back = answers.back;

            var addBasic = new BasicCard(front, back);

            if (answers.other) {
                createBasic();
            }
        });
    }

} else if (cardType === "cloze") {

} else {
    console.log("Please choose a valid card type");
}

