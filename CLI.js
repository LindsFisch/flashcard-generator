var fs = require('fs');
var inquirer = require('inquirer');
var BasicCard = require('./basicCard.js');
var ClozeCard = require('./clozeCard.js');
var library = require('./basicLog.json');

inquirer.prompt([
    {
        type: "list",
        name: "cardType",
        message: "What would you like to do?",
        choices: ["Create a Basic Card", "Create a Cloze Card", "Print all cards"]
    }
]).then(function(answers){

if (answers.cardType === "Create a Basic Card") {
    createBasic();
    function createBasic () { //create basic card with inquirer
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

            var cardObject = {  //create object to store response
                type: "Basic Card",
                front: answers.front,
                back: answers.back
            };

            library.push(cardObject); //push object into array

            fs.writeFile("basicLog.json", JSON.stringify(library, null, 2)); //write obj to file

            var addBasic = new BasicCard(front, back);  //basicCard constructor

            if (answers.other) { //if user wants to enter another card, run function again
                createBasic();
            }
        });
    }

} else if (answers.cardType === "Create a Cloze Card") {
    createCloze();
    function createCloze () {  //create cloze card with inquirer
        inquirer.prompt([
            {
                name: "fullText",
                message: "What is the full text of the flash card?"
            }, {
                name: "cloze",
                message: "What is the cloze portion of the flash card?",
            }, 
            {
                type: "confirm", 
                name: "other",
                message: "Would you like to create another?", 
                default: false
            }
        ]).then(function (answers){
            var fullText = answers.fullText;
            var cloze = answers.cloze;
            
            if (fullText.includes(cloze)){  //create partial text of card with input from user
                var partial = fullText.replace(cloze, '...');
                
                var cardObject = { //create object to store user input
                    type: "Cloze Card",
                    partialText: partial,
                    cloze: answers.cloze
                };

                library.push(cardObject); //push object into array

                fs.writeFile("basicLog.json", JSON.stringify(library, null, 2));

                var addCloze = new ClozeCard(fullText, cloze);
            } else {
                console.log("There was an error!"); //if cloze is not within full text, give error
            }        

            if (answers.other) {  //if user wants to create another card, run function
                createCloze();
            }
        })
    }

} else {
    for(var i = 0; i < library.length; i++) {
        if (library[i].type === "Basic Card") {  //if the card is a Basic card print this
            console.log("-----------");
            console.log(library[i].type);
            console.log("Question: " + library[i].front + "\nAnswer: " + library[i].back);
        } else {    //if the card is a cloze card print this
            console.log("-------------");            
            console.log(library[i].type);
            console.log("Question: " + library[i].partialText + "\nAnswer: " + library[i].cloze);
        }
    };    
}
})

