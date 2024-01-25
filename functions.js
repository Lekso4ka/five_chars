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
    const vowels = ["а","е","ё","и","о","у","ы","э","ю","я"];
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

const setCaption = (tag, arr) => {
    tag.innerHTML = `Найдено <span>${arr.length}</span> ${pluralize(arr.length, "подходящих", "подходящее", "подходящих")} ${pluralize(arr.length, "слов", "слово", "слова")}`;
}

const setWords = (tag, arr) => {
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
            if (flag) {
                result.push(word);
            }
        }
    })
    return result;
}

const findByChars = (arr) => {
    const charsActiveF = document.getElementsByClassName("char_f active");
    const charsActiveT = document.getElementsByClassName("char_t active");
    let result = [];
    arr.forEach(w => {
        let flag = true;
        for (let i = 0; i < charsActiveF.length; i++) {
            const txt = charsActiveF[i].innerText.toLowerCase()
            if (w.includes(txt)) {
                flag = false;
                break;
            }
        }
        for (let i = 0; i < charsActiveT.length; i++) {
            const txt = charsActiveT[i].innerText.toLowerCase()
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