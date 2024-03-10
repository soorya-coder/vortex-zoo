const fs = require("fs");
const prompt = require("prompt-sync")();

let file = prompt("File from root:");

function trav(file) {
  console.log(file);
  if (fs.lstatSync(file).isDirectory()) {
    let files = fs.readdirSync(file);
    files.forEach(function (fi) {
      trav(`${file}/${fi}`);
    });
  }else{
    console.log(file);
  }
}

let exist = fs.existsSync(file);
if (exist) {
  trav(file);
} else {
  console.log(`${file} File not found`);
}
