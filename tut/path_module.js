/** Path Module */

const path = require('path');

file = path.basename("tut/test.json");

console.log( file);

dir = path.dirname("tut/test.json");

console.log(dir);

isAbsolute = path.isAbsolute("tut/test.json");

console.log(isAbsolute);

isAbsolute = path.isAbsolute("/ideaGitHub/nodejs/tut/test.json");

console.log(isAbsolute);

let dirTut = "tut";

file = path.join("/nodejs", dirTut, "file.json");
console.log(file);

pathVar = path.parse("tut/test.json");
console.log(pathVar);

resolve = path.resolve("test.txt");
console.log(resolve);