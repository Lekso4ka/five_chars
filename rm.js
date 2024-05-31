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


/***********/
sum = 0;
sumCheck = 0;
//mar 1 - mar 31
const averageMar = [
    134,93,717,305,410,128,348,542,355,23,221,172,317,246,281,119,86,39,160,49,482,202,355,146,257,359,237,142,322,398,128
];

averageMar.forEach(n => sum += n);
console.log("mar", sum / averageMar.length);

//mar 1 - mar 31
const averageMarCheck = [
    140,99,723,311,416,134,354,547,361,28,225,248,358,258,699,485,554,120,385,338,737,339,973,228,343,511,245,148,332,414,132
];

averageMarCheck.forEach(n => sumCheck += n);
console.log("check mar", sumCheck / averageMarCheck.length);

/***********/
sum = 0;
sumCheck = 0;
//apr 1 - apr 30
const averageApr = [
   391,385,115,172,189,312,158,403,230,196,321,332,225,105,392,136,201,356,175,202,209,160,320,129,170,54,132
];

averageApr.forEach(n => sum += n);
console.log("apr", sum / averageApr.length);

//apr 1 - apr 30
const averageAprCheck = [
    397,451,182,176,180,331,162,379,240,202,333,338,244,108,399,118,206,361,177,212,241,166,323,132,177,65,137
];

averageAprCheck.forEach(n => sumCheck += n);
console.log("check apr", sumCheck / averageAprCheck.length);

/***********/
sum = 0;
sumCheck = 0;
//May 1 - May 31
const averageMay = [
    31,101,39,91,39,43,41,42,7,21,13,57,5,55,73,22,22,21,13,19,13,18,12,26,14,28,9,9,12,8,10
];

averageMay.forEach(n => sum += n);
console.log("May", sum / averageMay.length);

//May 1 - May 31
const averageMayCheck = [
    55,107,36,95,43,47,39,42,7,25,16,62,7,61,77,26,26,25,17,22,17,22,16,30,18,31,13,13,16,12,2
];

averageMayCheck.forEach(n => sumCheck += n);
console.log("check May", sumCheck / averageMayCheck.length);