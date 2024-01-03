const caption = document.querySelector(".caption")
const maskTag = document.querySelector(".mask");
const mask = maskTag.querySelector("input");
const findBtn = maskTag.querySelector(".findBtn");
const randBtn = maskTag.querySelector(".randBtn");
const resetBtn = maskTag.querySelector(".resetBtn");
const vowels2Btn = maskTag.querySelector(".vowels2Btn");
const vowels3Btn = maskTag.querySelector(".vowels3Btn");
const wordsTag = document.querySelector(".words");
const abcTrue = document.querySelector(".charsTrue");
const abcFalse = document.querySelector(".charsFalse");
const abc = "абвгдеёжзийклмнопрстуфхцчшщьыъэюя";
const charsF = document.getElementsByClassName("char_f");
const charsT = document.getElementsByClassName("char_t");
let totalWords = [];

for (let i = 0; i < abc.length; i++) {
	abcTrue.innerHTML += `<div class="char char_t">${abc[i]}</div>`;
	abcFalse.innerHTML += `<div class="char char_f">${abc[i]}</div>`;
}
let findWords = [];
fetch("./words.json")
//fetch("./v1/words.json")
	.then(res => res.json())
	.then(words => {
		words.sort();
		totalWords = [...words];
		findWords = findByChars(words);
		setCaption(caption, findWords);
		setWords(wordsTag, findWords);
		findBtn.addEventListener("click", e => {
			let data = mask.value;
			const reg = new RegExp(data.replace(/\*/g, "."))
			totalWords = words.filter(w => reg.test(w));
			findWords = findByChars(totalWords)
			setCaption(caption, findWords);
			setWords(wordsTag, findWords);
		})
		randBtn.addEventListener("click", e => {
			const n = getRandom(totalWords.length);
			mask.value = totalWords[n];
			findBtn.click();
		})
		resetBtn.addEventListener("click", e => {
			totalWords = [...words];
			findWords = findByChars(words);
			setCaption(caption, findWords);
			setWords(wordsTag, findWords);
		})
		vowels3Btn.addEventListener("click", e => {
			totalWords = findWithVowels(3, words)
			findWords = findByChars(totalWords)
			setCaption(caption, findWords);
			setWords(wordsTag, findWords);
		})
		vowels2Btn.addEventListener("click", e => {
			totalWords = findWithVowels(2, words)
			findWords = findByChars(totalWords)
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
				findWords = findByChars(totalWords)
				setCaption(caption, findWords);
				setWords(wordsTag, findWords);
			})
		}
	})


