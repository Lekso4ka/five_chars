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