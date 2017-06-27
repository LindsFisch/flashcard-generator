var fs = require("fs");

var ClozeCard = function (fullText, cloze) {
    this.fullText = fullText;
    console.log(fullText);
    this.cloze = cloze; 
    console.log(cloze);   
    this.partial = function () {
        if (this.fullText.includes(this.cloze)){
            var partial = this.fullText.replace(this.cloze, '...');
            return partial;
        } else {
            console.log("There was an error!");
        }        
    }
this.partial();
}


module.exports = ClozeCard;