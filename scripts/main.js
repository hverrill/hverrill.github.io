/**
 * @author 
 * Henry Verrill
 */

/** namespace. */
var hv = hv || {};
try {
    var fs = require('fs');
} catch (error) {
    console.log("FS Error: ", error);
}

var marked = require('marked');

try {
    var blog_files = fs.readdirSync('/blog/');
} catch (error) {
    console.log(error);
}


/** globals */
hv.counter = 0;
hv.emojis = ["😁","😋","🤨","🤖","💥","👌","🤟","👏","🤝","🦾","🧠","👀","🦍","🐈","🍚","🌌","⚡","👘","💎","📜","💰","📝","🧻"];
hv.emojiElement = document.getElementById("emoji");
window.onscroll = function(){
    if(window.scrollY > 10){
        let newEmoji = hv.emojis[Math.floor(Math.round(Math.random()*hv.emojis.length-1))];
        if(newEmoji == undefined) newEmoji = "💥";
        hv.emojiElement.innerHTML = newEmoji;
    } else if(window.scrollY < 5) {
        hv.emojiElement.innerHTML = "👋";
    }
}
hv.render_blog_post((blog_post) => {
    
});

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
    blog_files.forEach((file) => {
        console.log("File:", file);
    });
    // hv.read();
    // hv.counter++;
    // hv.write();
    // console.log(hv.counter);
};

hv.main();
