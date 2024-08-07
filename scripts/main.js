/**
 * @author 
 * Henry Verrill
 */

// Installs globals onto window:
// * Buffer
// * require (monkey-patches if already defined)
// * process
// You can pass in an arbitrary object if you do not wish to pollute
// the global namespace.
BrowserFS.install(window);

// Configures BrowserFS to use the LocalStorage file system.
BrowserFS.configure({
    fs: "LocalStorage"
}, function (e) {
    if (e) {
        // An error happened!
        throw e;
    }
    // Otherwise, BrowserFS is ready-to-use!
});


/** namespace. */
var hv = hv || {};

// var marked = require('marked');
var md = window.markdownit();
var fs = require('fs');


/** globals */
hv.counter = 0;
hv.emojis = ["😁", "😋", "🤨", "🤖", "💥", "👌", "🤟", "👏", "🤝", "🦾", "🧠", "👀", "🦍", "🐈", "🍚", "🌌", "⚡", "👘", "💎", "📜", "💰", "📝", "🧻"];
hv.emojiElement = document.getElementById("emoji");
window.onscroll = function () {
    if (window.scrollY > 10) {
        let newEmoji = hv.emojis[Math.floor(Math.round(Math.random() * hv.emojis.length - 1))];
        if (newEmoji == undefined) newEmoji = "💥";
        hv.emojiElement.innerHTML = newEmoji;
    } else if (window.scrollY < 5) {
        hv.emojiElement.innerHTML = "👋";
    }
}

hv.processFiles = () => {
    //var filelist = fs.readdirSync('https://hverrill.github.io/blog/');
    //console.log(filelist.size());
    // filelist.forEach((file) => {
    //     console.log("FILE: ", file);
    //     hv.writefiles(file);
    // });
};
hv.writefiles = (file) => {
    // fs.open(file);

    fs.readFile(file, (err, data) => {
        document.getElementById('mdcontent').innerHTML += marked(data);
    });
};



/** Functions */
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

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

    var reader = new FileReader();
    var text = reader.readAsText(fs.createReadStream("https://github.com/hverrill/test.md"));
    console.log(text);
    document.getElementById('mdcontent').innerHTML += md.render(text);

    hv.processFiles();
    // hv.read();
    // hv.counter++;
    // hv.write();
    // console.log(hv.counter);
};

hv.main();