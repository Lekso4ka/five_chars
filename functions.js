const pluralize = (n, w0, w1, w2) => {
    if (n % 100 < 11 || n % 100 > 14) {
        if (n % 10 === 1) {
            return w1;
        } else if (n % 10 >= 2 && n % 10 <= 4) {
            return w2;
        }
    }
    return w0;
}

const getWordWithVowels = (n = 3) => {
    const vowels = ["а","е","и","о","у","ы","э","ю","я"];
    const manyVowels = []
    for (let i = 0, cnt = vowels.length; i < cnt; i++) {
        for (let j = i + 1; j < cnt; j++) {
            if (n >= 3) {
                for (let k = j + 1; k < cnt; k++) {
                    if (n === 4) {
                        for (let l = k + 1; l < cnt; l++) {
                            manyVowels.push([vowels[i], vowels[j], vowels[k], vowels[l]]);
                        }
                    } else {
                        manyVowels.push([vowels[i], vowels[j], vowels[k]]);
                    }
                }
            } else {
                manyVowels.push([vowels[i], vowels[j]]);
            }
        }
    }
    return manyVowels;
}
const getRandom = (max = 100, min = 0) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const createTable = (data, sort) => {
    const statsBlock = document.querySelector(".statistic");
    statsBlock.innerHTML = "";
    const result = Object.entries(data);
    if (sort.type === "chars" && sort.val === "DSC") {
        result.sort((a,b) => b[0] > a[0] ? 1 : -1);
    } else if (sort.val === "ASC") {
        result.sort((a,b) => b[1][sort.type] - a[1][sort.type]);
    } else if (sort.val === "DSC") {
        result.sort((a,b) => a[1][sort.type] - b[1][sort.type]);
    } else {
        result.sort((a,b) => a[0] > b[0] ? 1 : -1);
    }
    result.forEach(char => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <th>${char[0]}</th>
            <td>${char[1].all}</td>
            <td>${char[1].words}</td>
            <td>${char[1][0]}</td>
            <td>${char[1][1]}</td>
            <td>${char[1][2]}</td>
            <td>${char[1][3]}</td>
            <td>${char[1][4]}</td>
        `
        statsBlock.append(row);
    });
}
const setStatistic = (arr) => {
    const sort = {
        type: "chars",
        val: null
    }
    const cells = document.querySelectorAll("thead th");
    console.log(cells)
    const cellsData = ["chars", "all", "words", "0", "1", "2", "3", "4"];
    cells.forEach((c, i) => {
        if (c.classList.contains("ASC")) {
            sort.type = cellsData[i];
            sort.val = "ASC"
        } else if (c.classList.contains("DSC")) {
            sort.type = cellsData[i];
            sort.val = "DSC"
        }
    })
    const hash = {};
    arr.forEach((w) => {
        const uniq = [];
        for (let i = 0; i < w.length; i++) {
            const char = w[i];
            if (hash[char]) {
                hash[char].all++;
            } else {
                hash[char] = {
                    all: 1,
                    words: 0,
                    "0": 0,
                    "1": 0,
                    "2": 0,
                    "3": 0,
                    "4": 0,
                }
            }
            if (!uniq.includes(char)) {
                hash[char].words++;
                uniq.push(char)
            }
            hash[char][i]++;
        }
    })
    console.log(hash);
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", (e) => {
            if (sort.type === cellsData[i]) {
                if (sort.val === "ASC") {
                    sort.val = "DSC"
                } else if (sort.val === "DSC") {
                    sort.val = null
                } else {
                    sort.val = "ASC"
                }
            } else {
                sort.type = cellsData[i];
                sort.val = "ASC"
            }
            cells.forEach(c => {
                if (c === cells[i] && sort.val) {
                    c.className = `active ${sort.val}`
                } else {
                    c.className = "";
                }
            })
            createTable(hash, sort);
        });
    }
    
    createTable(hash, sort);
}
const setCaption = (tag, arr) => {
    tag.innerHTML = `Найдено <span>${arr.length}</span> <span>${pluralize(arr.length, "подходящих", "подходящее", "подходящих")}</span> ${pluralize(arr.length, "слов", "слово", "слова")}`;
}


const setWords = (tag, arr) => {
    setStatistic(arr);
    const result = arr.map(w => {
        if (past.includes(w)) {
            return `<span class="has">${w}</span>`
        }
        if (pastWords.includes(w)) {
            return `<span class="has">${w}</span>`
        }
        if (isWords.includes(w)) {
            return `<span class="green">${w}</span>`
        }
        if (testWords.includes(w)) {
            return `<span class="test">${w}</span>`
        }
        return `<span>${w}</span>`
    });
    tag.innerHTML = result.join("");
}

const findWithVowels = (n = 3, arr) => {
    const variants = getWordWithVowels(n);
    const result = [];
    variants.forEach(val => {
        for (let i = 0, cnt = arr.length; i < cnt; i++) {
            const word = arr[i];
            let flag = true;
            for (let j = 0; j < val.length; j++) {
                if (word.includes(val[j])) continue;
                flag = false;
                break;
            }
            if (flag && !result.includes(word)) {
                result.push(word);
            }
        }
    })
    result.sort();
    return result;
}

const findByChars = (arr) => {
    const charsActiveF = document.getElementsByClassName("char_f active");
    const charsActiveT = document.getElementsByClassName("char_t active");
    let result = [];
    arr.forEach(w => {
        let flag = true;
        for (let i = 0; i < charsActiveF.length; i++) {
            const txt = charsActiveF[i].firstElementChild.innerText.toLowerCase()
            if (w.includes(txt)) {
                flag = false;
                break;
            }
        }
        for (let i = 0; i < charsActiveT.length; i++) {
            const txt = charsActiveT[i].firstElementChild.innerText.toLowerCase()
            if (!w.includes(txt)) {
                flag = false;
                break;
            }
        }
        if (flag) {
            result.push(w)
        }
    })
    return result;
}


const getUniqChars = (arr) => {
    return arr.filter(word => {
        let result = word
            .split("")
            .reduce((acc, char) => {
                if (!acc.includes(char)) {
                    acc.push(char)
                }
                return acc;
            }, [])
        return result.length === 5;
    })
}

