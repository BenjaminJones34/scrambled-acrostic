const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

let textArr = argv.text.toLowerCase().replace(/[^\w\s]/gi, '').split(""); //the replace removes non-alphanumeric characters
let flag = false; 

//changing textArr to only have letters from beginning and end of words
for (let i = 0; i < textArr.length; i++) {
    if (textArr[i] !== " ") {
        flag = true;
        while (flag) {
            if (textArr[i+1] !== " " && textArr[i+2] !== " " && i+1 !== textArr.length-1) {
                textArr.splice(i+1, 1);
            } else {
                flag = false;
            }
        }
        i++;
    } else {
        textArr.splice(i, 1);
        i--;
    }
}

//removes all whitespace from textArr
while (textArr.includes(" ")) {
    textArr.splice(textArr.indexOf(" "), 1);
}

let messageArr = argv.message.toLowerCase().replace(/[^\w\s]/gi, '').split("");

// this removes all whitespace
while (messageArr.includes(" ")) {
    messageArr.splice(messageArr.indexOf(" "), 1);
}

// this checks if the message given is possible
function acrosticMessageCheck() {
    for (let letter of messageArr) {
        if (textArr.includes(letter)) {
            textArr.splice(textArr.indexOf(letter), 1);
        } else {
            return false;
        }
    } return true;
}


console.log(acrosticMessageCheck());