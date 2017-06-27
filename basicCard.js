var fs = require("fs");

var BasicCard = function (front, back) {
    this.front = front;
    console.log(front);
    this.back = back; 
    console.log(back);
    }

// BasicCard.prototype.logQuestion = function () {
//     fs.
// }

module.exports = BasicCard;