/**
 * @author 
 * Henry Verrill
 */

/** namespace. */
var hv = hv || {};

/** globals */
hv.counter = 0;
hv.emojis = ["👋","😁","😋","🤨","😳","😱","😤","🤖","💥","👌","🤙","🤟","👏","🤝","🦾","🧠","👀","🦍","🐈","🍚","🏛","🌌","⚡","🔥","💧","👘","💎","📜","💰","📝","🗑","🧻","⁉","♻","⚜"];
hv.emojiElement = document.getElementsByClassName("emoji");
window.onscroll = function(){
    let index = Math.round(Math.random()*hv.emojis.length);
    if(index == 35) index--;
    let newEmoji = hv.emojis[index];
    console.log(newEmoji+" i:: " +index);
}

/** Functions */
// hv.write((count) => {
//     const fsLibrary  = require('fs')  
//     fsLibrary.writeFile('count.txt', hv.counter, (error) => { 
//         if (error) throw err; 
//     })
// });

// hv.read((count) => {
//     const fsLibrary  = require('fs')
//     fsLibrary.readFile('count.txt', (error, fileCount) => {
//         if (error) throw err;
//         hv.counter = fileCount;
//     })
// });

// hv.ClassName = class {
// 	constructor() {

// 	}

// 	methodName() {

// 	}
// }


/* Main */
hv.main = function () {
	console.log("Hello World!");

    // hv.read();
    // hv.counter++;
    // hv.write();
    // console.log(hv.counter);
};

hv.main();
