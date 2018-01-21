/* global words*/
var chosenWord = words[Math.floor(Math.random() * words.length)];
console.log(chosenWord);
var splitChosenWord;
var attempt;
var splitAttempt;
var table = document.getElementsByTagName("table")[0];
var tryRow1Letter1Input = document.getElementById("tryRow1Letter1Input");
var tryRow1Letter2Input = document.getElementById("tryRow1Letter2Input");
var tryRow1Letter3Input = document.getElementById("tryRow1Letter3Input");
var tryRow1Letter4Input = document.getElementById("tryRow1Letter4Input");
var tryRow1Letter5Input = document.getElementById("tryRow1Letter5Input");
var tryRow2Letter1Input = document.getElementById("tryRow2Letter1Input");
var tryRow2Letter2Input = document.getElementById("tryRow2Letter2Input");
var tryRow2Letter3Input = document.getElementById("tryRow2Letter3Input");
var tryRow2Letter4Input = document.getElementById("tryRow2Letter4Input");
var tryRow2Letter5Input = document.getElementById("tryRow2Letter5Input");
var tryRow3Letter1Input = document.getElementById("tryRow3Letter1Input");
var tryRow3Letter2Input = document.getElementById("tryRow3Letter2Input");
var tryRow3Letter3Input = document.getElementById("tryRow3Letter3Input");
var tryRow3Letter4Input = document.getElementById("tryRow3Letter4Input");
var tryRow3Letter5Input = document.getElementById("tryRow3Letter5Input");
var tryRow4Letter1Input = document.getElementById("tryRow4Letter1Input");
var tryRow4Letter2Input = document.getElementById("tryRow4Letter2Input");
var tryRow4Letter3Input = document.getElementById("tryRow4Letter3Input");
var tryRow4Letter4Input = document.getElementById("tryRow4Letter4Input");
var tryRow4Letter5Input = document.getElementById("tryRow4Letter5Input");
var tryRow5Letter1Input = document.getElementById("tryRow5Letter1Input");
var tryRow5Letter2Input = document.getElementById("tryRow5Letter2Input");
var tryRow5Letter3Input = document.getElementById("tryRow5Letter3Input");
var tryRow5Letter4Input = document.getElementById("tryRow5Letter4Input");
var tryRow5Letter5Input = document.getElementById("tryRow5Letter5Input");
var answerLetter1Input = document.getElementById("answerLetter1Input");
var answerLetter2Input = document.getElementById("answerLetter2Input");
var answerLetter3Input = document.getElementById("answerLetter3Input");
var answerLetter4Input = document.getElementById("answerLetter4Input");
var answerLetter5Input = document.getElementById("answerLetter5Input");
var submitAttempt = document.getElementById("submitAttempt");

var row1 = [tryRow1Letter1Input, tryRow1Letter2Input, tryRow1Letter3Input, tryRow1Letter4Input, tryRow1Letter5Input];
var row1id = ["tryRow1Letter1Input", "tryRow1Letter2Input", "tryRow1Letter3Input", "tryRow1Letter4Input", "tryRow1Letter5Input"];
var row2 = [tryRow2Letter1Input, tryRow2Letter2Input, tryRow2Letter3Input, tryRow2Letter4Input, tryRow2Letter5Input];
var row2id = ["tryRow2Letter1Input", "tryRow2Letter2Input", "tryRow2Letter3Input", "tryRow2Letter4Input", "tryRow2Letter5Input"];
var row3 = [tryRow3Letter1Input, tryRow3Letter2Input, tryRow3Letter3Input, tryRow3Letter4Input, tryRow3Letter5Input];
var row3id = ["tryRow3Letter1Input", "tryRow3Letter2Input", "tryRow3Letter3Input", "tryRow3Letter4Input", "tryRow3Letter5Input"];
var row4 = [tryRow4Letter1Input, tryRow4Letter2Input, tryRow4Letter3Input, tryRow4Letter4Input, tryRow4Letter5Input];
var row4id = ["tryRow4Letter1Input", "tryRow4Letter2Input", "tryRow4Letter3Input", "tryRow4Letter4Input", "tryRow4Letter5Input"];
var row5 = [tryRow5Letter1Input, tryRow5Letter2Input, tryRow5Letter3Input, tryRow5Letter4Input, tryRow5Letter5Input];
var row5id = ["tryRow5Letter1Input", "tryRow5Letter2Input", "tryRow5Letter3Input", "tryRow5Letter4Input", "tryRow5Letter5Input"];

var rows = [row1, row2, row3, row4, row5];
var rowsid = [row1id, row2id, row3id, row4id, row5id];
var usingRowNumber = 0; //i can change this by using event.target

table.onkeyup = function (e) {
	var target = e.srcElement || e.target;
	var maxLength = target.maxLength;
	var myLength = target.value.length;
	if (myLength >= maxLength) {
		var next = rowsid[usingRowNumber].indexOf(target.id);
		next++;
		if (next < 5) {
			rows[usingRowNumber][next].select();
		}
	} else if (myLength === 0) {
		var previous = rowsid[usingRowNumber].indexOf(target.id);
		previous--;
		if (previous > 0) {
			rows[usingRowNumber][previous].select();
		}
	}
	if (event.keyCode === 13 && rows[usingRowNumber][0].value.length >= 1 && rows[usingRowNumber][1].value.length >= 1 && rows[usingRowNumber][2].value.length >= 1 && rows[usingRowNumber][3].value.length >= 1 && rows[usingRowNumber][4].value.length >= 1) {
		document.getElementById('submitAttempt').click();
	}
	if (target === rows[usingRowNumber][0]) {
		rows[usingRowNumber][0].value = chosenWord.charAt(0);
	}
};

tryRow1Letter1Input.value = chosenWord.charAt(0);
tryRow2Letter1Input.value = chosenWord.charAt(0);
tryRow3Letter1Input.value = chosenWord.charAt(0);
tryRow4Letter1Input.value = chosenWord.charAt(0);
tryRow5Letter1Input.value = chosenWord.charAt(0);

submitAttempt.onclick = function () {
	combineAttemptLettersAndCompareWithChosenWord();
};

function combineAttemptLettersAndCompareWithChosenWord() {
	attempt = rows[usingRowNumber][0].value + rows[usingRowNumber][1].value + rows[usingRowNumber][2].value + rows[usingRowNumber][3].value + rows[usingRowNumber][4].value;
	if (attempt.toLowerCase() === chosenWord) {
		for (var i = 0; i <= 4; i++) {
			rows[usingRowNumber][i].style.backgroundColor = "#fb5454";
		}
		answerLetter1Input.value = chosenWord[0];
		answerLetter2Input.value = chosenWord[1];
		answerLetter3Input.value = chosenWord[2];
		answerLetter4Input.value = chosenWord[3];
		answerLetter5Input.value = chosenWord[4];
	} else {
		splitChosenWord = chosenWord.split("");
		splitAttempt = attempt.split("");
		comparSplitWordsRow();
	}
}

function comparSplitWordsRow() {
	for (var i = 0; i <= 4; i++) {
		if (splitAttempt[i].toLowerCase() === splitChosenWord[i]) {
			rows[usingRowNumber][i].style.backgroundColor = "#fb5454";
			rows[usingRowNumber][i].disabled = true;
		} else if (splitChosenWord.includes(splitAttempt[i].toLowerCase())) {
			rows[usingRowNumber][i].style.backgroundColor = "#cece2a";
			rows[usingRowNumber][i].style.borderRadius = "100%";
			rows[usingRowNumber][i].disabled = true;
		} else {
			rows[usingRowNumber][i].style.backgroundColor = "#becfd6";
			rows[usingRowNumber][i].disabled = true;
		}
	}
	startNewRow();
}

function startNewRow() {
	usingRowNumber++;
	if (usingRowNumber === 5) {
		answerLetter1Input.value = chosenWord[0];
		answerLetter2Input.value = chosenWord[1];
		answerLetter3Input.value = chosenWord[2];
		answerLetter4Input.value = chosenWord[3];
		answerLetter5Input.value = chosenWord[4];
		return;
	} else {
		for (var i = 0; i <= 4; i++) {
			rows[usingRowNumber][i].disabled = false;
			rows[usingRowNumber][1].focus();
		}
	}

}




////////////OLD VERSION

//tryRow1Letter1Input.onkeyup = function() {
//	if (this.value.length >= 1) {
//		tryRow1Letter2Input.select();
//	}
//	tryRow1Letter1Input.value = chosenWord.charAt(0);
//};
//
//tryRow1Letter2Input.onkeyup = function() {
//	if (this.value.length >= 1) {
//		tryRow1Letter3Input.select();
//	}
//	if (this.value.length === 0) {
//		tryRow1Letter1Input.focus();
//	}
//	if (event.keyCode === 13 && rows[usingRowNumber][0].value.length >= 1 && rows[usingRowNumber][1].value.length >= 1 && rows[usingRowNumber][2].value.length >= 1 && rows[usingRowNumber][3].value.length >= 1 && rows[usingRowNumber][4].value.length >= 1) {
//		document.getElementById('submitAttempt').click();
//	}
//};
//
//tryRow1Letter3Input.onkeyup = function() {
//	if (this.value.length >= 1) {
//		tryRow1Letter4Input.select();
//	}
//	if (this.value.length === 0) {
//		tryRow1Letter2Input.select();
//	}
//	if (event.keyCode === 13 && rows[usingRowNumber][0].value.length >= 1 && rows[usingRowNumber][1].value.length >= 1 && rows[usingRowNumber][2].value.length >= 1 && rows[usingRowNumber][3].value.length >= 1 && rows[usingRowNumber][4].value.length >= 1) {
//		document.getElementById('submitAttempt').click();
//	}
//};
//
//tryRow1Letter4Input.onkeyup = function() {
//	if (this.value.length >= 1) {
//		tryRow1Letter5Input.select();
//	}
//	if (this.value.length === 0) {
//		tryRow1Letter3Input.select();
//	}
//	if (event.keyCode === 13 && rows[usingRowNumber][0].value.length >= 1 && rows[usingRowNumber][1].value.length >= 1 && rows[usingRowNumber][2].value.length >= 1 && rows[usingRowNumber][3].value.length >= 1 && rows[usingRowNumber][4].value.length >= 1) {
//		document.getElementById('submitAttempt').click();
//	}
//};
//
//tryRow1Letter5Input.onkeyup = function() {
//	if (this.value.length === 0) {
//		tryRow1Letter4Input.select();
//	}
//	if (event.keyCode === 13 && rows[usingRowNumber][0].value.length >= 1 && rows[usingRowNumber][1].value.length >= 1 && rows[usingRowNumber][2].value.length >= 1 && rows[usingRowNumber][3].value.length >= 1 && rows[usingRowNumber][4].value.length >= 1) {
//		document.getElementById('submitAttempt').click();
//	}
//};
