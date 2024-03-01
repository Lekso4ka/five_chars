const fs = require("node:fs");

let data = fs.readFileSync("./check/broke.js", "utf-8");
data = data.slice(17);
data = JSON.parse(data);

let words = fs.readFileSync("./words.json", "utf-8");
words = JSON.parse(words);
console.log(words.length)
words = words.filter(w => !data.includes(w));
console.log(data.length, words.length)

fs.writeFileSync("./words_2.json", JSON.stringify(words), "utf-8");

 //feb 1 - feb 29
const averageFeb = [133, 88, 49, 74, 179, 14, 16, 262, 45, 345, 246, 209, 43, 347, 299, 539, 11, 218, 138, 30, 200, 213, 120, 236, 96, 541, 299, 194];
let sum = 0;
averageFeb.forEach(n => sum += n);
console.log("feb", sum / averageFeb.length);

 //feb 20 - feb 29
const averageFebCheck = [144, 35, 206, 219, 126, 242, 102, 547, 305, 200];
let sumCheck = 0;
averageFebCheck.forEach(n => sumCheck += n);
console.log("check feb", sumCheck / averageFebCheck.length);