const caption = document.querySelector(".caption")
const maskTag = document.querySelector(".mask");
const mask = maskTag.querySelectorAll("input");
const findBtn = maskTag.querySelector(".findBtn");
const randBtn = maskTag.querySelector(".randBtn");
const resetBtn = maskTag.querySelector(".resetBtn");
const checkBtn = maskTag.querySelector(".check");
const vowels2Btn = maskTag.querySelector(".vowels2Btn");
const vowels3Btn = maskTag.querySelector(".vowels3Btn");
const vowels4Btn = maskTag.querySelector(".vowels4Btn");
const uniqBtn = maskTag.querySelector(".uniqChars");
const wordsTag = document.querySelector(".words");
const abcTrue = document.querySelector(".charsTrue");
const abcFalse = document.querySelector(".charsFalse");
const abc = "абвгдежзийклмнопрстуфхцчшьыя";
const charsF = document.getElementsByClassName("char_f");
const charsT = document.getElementsByClassName("char_t");
let totalWords = [];
const hash = {};

document.querySelector(".stats").addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
    if (e.currentTarget.classList.contains("active")) {
        e.currentTarget.lastElementChild.className = "bi bi-chevron-up"
    } else {
        e.currentTarget.lastElementChild.className = "bi bi-chevron-down"
    }
})

for (let i = 0; i < abc.length; i++) {
    abcTrue.innerHTML += `<div class="char char_t"><span>${abc[i]}</span></div>`;
    abcFalse.innerHTML += `<div class="char char_f"><span>${abc[i]}</span></div>`;
}
let findWords = [];
fetch("./words.json")
    //fetch("./v1/words.json")
    .then(res => res.json())
    .then(words => {
        words = words.filter(w => !bedWords.includes(w) && !pastWords.includes(w) && !past.includes(w) && !isWords.includes(w) && !testWords.includes(w) && !strangeWords.includes(w));
        words.sort();
        words.forEach(w => {
            for (let i = 0; i < w.length; i++) {
                if (hash[w[i]]) {
                    hash[w[i]]++;
                } else {
                    hash[w[i]] = 1;
                }
            }
        })
        for (let i = 0; i < charsT.length; i++) {
            const txt = charsT[i].innerText.toLowerCase();
            const tooltip = document.createElement("span");
            tooltip.className = "tooltip";
            tooltip.innerText = hash[txt];
            charsT[i].append(tooltip);
        }
        totalWords = [...words];
        findWords = findByChars(words);
        setCaption(caption, findWords);
        setWords(wordsTag, findWords);
        findBtn.addEventListener("click", e => {
            let data = "";
            mask.forEach(inp => {
                data += inp.value.toLowerCase() || "*";
            })
            const reg = new RegExp(data.replace(/\*/g, "."))
            totalWords = words.filter(w => reg.test(w));
            findWords = findByChars(totalWords)
            setCaption(caption, findWords);
            setWords(wordsTag, findWords);
        })
        randBtn.addEventListener("click", e => {
            const n = getRandom(words.length);
            const word = words[n];
            mask.forEach((inp, i) => {
                inp.value = word[i];
            })
            findBtn.click();
        })
        resetBtn.addEventListener("click", e => {
            totalWords = [...words];
            findWords = findByChars(totalWords);
            setCaption(caption, findWords);
            setWords(wordsTag, findWords);
            mask.forEach((inp) => {
                inp.value = "";
            })
        })
        uniqBtn.addEventListener("click", e => {
            totalWords = getUniqChars(words)
            findWords = findByChars(totalWords)
            mask.forEach(inp => {
                inp.value = "";
            })
            setCaption(caption, findWords);
            setWords(wordsTag, findWords);
        })
        vowels3Btn.addEventListener("click", e => {
            totalWords = findWithVowels(3, words)
            findWords = findByChars(totalWords)
            mask.forEach(inp => {
                inp.value = "";
            })
            setCaption(caption, findWords);
            setWords(wordsTag, findWords);
        })
        vowels2Btn.addEventListener("click", e => {
            totalWords = findWithVowels(2, words)
            findWords = findByChars(totalWords)
            mask.forEach(inp => {
                inp.value = "";
            })
            setCaption(caption, findWords);
            setWords(wordsTag, findWords);
        })
        for (let i = 0; i < abc.length; i++) {
            charsF[i].addEventListener("click", () => {
                const cf = charsF[i];
                const ct = charsT[i];
                !cf.classList.contains("disable") && cf.classList.toggle("active");
                cf.classList.contains("active")
                    ? ct.classList.add("disable")
                    : ct.classList.remove("disable");
                findWords = findByChars(totalWords)
                setCaption(caption, findWords);
                setWords(wordsTag, findWords);
            })
            charsT[i].addEventListener("click", () => {
                const cf = charsF[i];
                const ct = charsT[i];
                !ct.classList.contains("disable") && ct.classList.toggle("active");
                ct.classList.contains("active")
                    ? cf.classList.add("disable")
                    : cf.classList.remove("disable");
                findWords = findByChars(totalWords);
                setCaption(caption, findWords);
                setWords(wordsTag, findWords);
            })
        }
    })


