var fs = require("fs");
var library = require ("./basicLog.json");

var BasicCard = function (front, back) {
    this.front = front;
    console.log(front);
    this.back = back; 
    console.log(back);
}


// function basicLog (front, back) {
//     var basicLogFile = [
//         {
//             type: "Basic Card",
//             cardFront: front,
//             cardBack: back
//         }
//     ]

//     // basicLogFile.cards.push({cardFront: front, cardBack: back});

//     var json = JSON.stringify(basicLogFile);

//     fs.readFile('basicLog.json', 'utf8', function (err, data) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data);
//            var parseJson = JSON.parse(data);
//             parseJson.basicLogFile.push({cardFront: front, cardBack: back});
//             json = JSON.stringify(basicLogFile);
//             fs.writeFile("basicLog.json",  JSON.stringify(parseJson), 'utf8', function (err, data){
//                 if (err) throw err;
//             })
//         }
//     })

// }

module.exports = BasicCard;