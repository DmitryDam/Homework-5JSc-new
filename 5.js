
const keyboard = {
    layouts: {
        en: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ru: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ua: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
    }, 
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

const alphabetEn = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const alphabetRu = "йцукенгшщзхъфывапролджэячсмитьбю.";
const alphabetUa = "йцукенгшщзхїфівапролджєячсмитьбю.";
const row1En = document.getElementById('row1En');
const row2En = document.getElementById('row2En');
const row3En = document.getElementById('row3En');
const row1Ru = document.getElementById('row1Ru');
const row2Ru = document.getElementById('row2Ru');
const row3Ru = document.getElementById('row3Ru');
const row1Ua = document.getElementById('row1Ua');
const row2Ua = document.getElementById('row2Ua');
const row3Ua = document.getElementById('row3Ua');
addKeyboardLayout (alphabetEn);
addKeyboardLayout (alphabetRu);
addKeyboardLayout (alphabetUa);

function addKeyboardLayout (data) {

	let arrAlphabet = data.split('');

	let line1 = arrAlphabet.slice(0,12);
	let line2 = arrAlphabet.slice(12,23);
	let line3 = arrAlphabet.slice(23,35);

	let stringLine1 = line1.join(" ");
	let stringLine2 = line2.join(" ");
	let stringLine3 = line3.join(" ");

	if (data == alphabetEn) {
		row1En.innerHTML = `Символы первого ряда клавиатуры (En) - ${stringLine1}`;
		row2En.innerHTML = `Символы второго ряда клавиатуры (En) - ${stringLine2}`;
		row3En.innerHTML = `Символы третьего ряда клавиатуры (En) - ${stringLine3}`;

		keyboard.layouts.en.topRow = line1;
		keyboard.layouts.en.middleRow = line2;
		keyboard.layouts.en.bottomRow = line3;
	}

	else if (data == alphabetRu) {
		row1Ru.innerHTML = `Символы первого ряда клавиатуры (Ru) - ${stringLine1}`;
		row2Ru.innerHTML = `Символы второго ряда клавиатуры (Ru) - ${stringLine2}`;
		row3Ru.innerHTML = `Символы третьего ряда клавиатуры (Ru) - ${stringLine3}`;

		keyboard.layouts.ru.topRow = line1;
		keyboard.layouts.ru.middleRow = line2;
		keyboard.layouts.ru.bottomRow = line3;
	}

	else if (data == alphabetUa) {
		row1Ua.innerHTML = `Символы первого ряда клавиатуры (Ua) - ${stringLine1}`;
		row2Ua.innerHTML = `Символы второго ряда клавиатуры (Ua) - ${stringLine2}`;
		row3Ua.innerHTML = `Символы третьего ряда клавиатуры (Ua) - ${stringLine3}`;

		keyboard.layouts.ua.topRow = line1;
		keyboard.layouts.ua.middleRow = line2;
		keyboard.layouts.ua.bottomRow = line3;
	}
}

// Task 2
let language;
var myLanguage = document.getElementById('myLanguage');
let myKeyboard = [];

do {
	language = prompt('Выберите язык', '0 - en, 1 - ru, 2 - ua');
	if (language == 0) {
		keyboard.currentLang = keyboard.langs[0];
		myLanguage.innerHTML = 'Выбран язык английский' ;
		myKeyboard.push(keyboard.layouts.en.topRow);
		myKeyboard.push(keyboard.layouts.en.middleRow);
		myKeyboard.push(keyboard.layouts.en.bottomRow);
		myKeyboard = (keyboard.layouts.en.topRow).concat((keyboard.layouts.en.middleRow),(keyboard.layouts.en.bottomRow));
	}
	else if (language == 1) {
		keyboard.currentLang = keyboard.langs[1];
		myLanguage.innerHTML = 'Выбран язык русский' ;
		myKeyboard.push(keyboard.layouts.ru.topRow);
		myKeyboard.push(keyboard.layouts.ru.middleRow);
		myKeyboard.push(keyboard.layouts.ru.bottomRow);
		myKeyboard = (keyboard.layouts.ru.topRow).concat((keyboard.layouts.ru.middleRow),(keyboard.layouts.ru.bottomRow));
	}
	else if (language == 2) {
		keyboard.currentLang = keyboard.langs[2];
		myLanguage.innerHTML = 'Выбран язык украинский' ;
		myKeyboard.push(keyboard.layouts.ua.topRow);
		myKeyboard.push(keyboard.layouts.ua.middleRow);
		myKeyboard.push(keyboard.layouts.ua.bottomRow);
		myKeyboard = (keyboard.layouts.ua.topRow).concat((keyboard.layouts.ua.middleRow),(keyboard.layouts.ua.bottomRow));
	}

	else  {
		alert('Выбран не доступный язык!');
	}	
}
while (language > 2 && language != null);

console.log(myKeyboard);

// Task 3
const letterRandom = document.getElementById('letterRandom');

document.getElementById('getLetter').onclick = function () {
	getRandCharInAlph ();
}

function getRandCharInAlph () {

	let keyboardLetter
	let keyboardLength = myKeyboard.length;
	let keyboardNumber = Math.floor(keyboardLength * Math.random());

	for (let i=0; i<keyboardLength; i++) {
		if (i == keyboardNumber) {
			keyboardLetter = myKeyboard[i];
		}
	}

	letterRandom.innerHTML = `Случайная буква алфавита - ${keyboardLetter}`;
}
console.log(keyboard);