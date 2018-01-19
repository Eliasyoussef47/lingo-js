var chosenWord = words[Math.floor(Math.random() * words.length)];
console.log(chosenWord);
var splitChosenWord;
var attempt;
var splitAttempt;
var tryRow1Letter1Input = document.getElementById("tryRow1Letter1Input");
var tryRow1Letter2Input = document.getElementById("tryRow1Letter2Input");
var tryRow1Letter3Input = document.getElementById("tryRow1Letter3Input");
var tryRow1Letter4Input = document.getElementById("tryRow1Letter4Input");
var tryRow1Letter5Input = document.getElementById("tryRow1Letter5Input");
var submitAttempt = document.getElementById("submitAttempt");

tryRow1Letter1Input.onkeyup = function() {
	if (this.value.length >= 1) {
		tryRow1Letter2Input.select();
	}
	tryRow1Letter1Input.value = chosenWord.charAt(0);
};

tryRow1Letter2Input.onkeyup = function() {
	if (this.value.length >= 1) {
		tryRow1Letter3Input.select();
	}
	if (this.value.length === 0) {
		tryRow1Letter1Input.focus();
	}
	if (event.keyCode === 13 && rows[usingRowNumber][0].value.length >= 1 && rows[usingRowNumber][1].value.length >= 1 && rows[usingRowNumber][2].value.length >= 1 && rows[usingRowNumber][3].value.length >= 1 && rows[usingRowNumber][4].value.length >= 1) {
		document.getElementById('submitAttempt').click();
	}
};

tryRow1Letter3Input.onkeyup = function() {
	if (this.value.length >= 1) {
		tryRow1Letter4Input.select();
	}
	if (this.value.length === 0) {
		tryRow1Letter2Input.select();
	}
	if (event.keyCode === 13 && rows[usingRowNumber][0].value.length >= 1 && rows[usingRowNumber][1].value.length >= 1 && rows[usingRowNumber][2].value.length >= 1 && rows[usingRowNumber][3].value.length >= 1 && rows[usingRowNumber][4].value.length >= 1) {
		document.getElementById('submitAttempt').click();
	}
};

tryRow1Letter4Input.onkeyup = function() {
	if (this.value.length >= 1) {
		tryRow1Letter5Input.select();
	}
	if (this.value.length === 0) {
		tryRow1Letter3Input.select();
	}
	if (event.keyCode === 13 && rows[usingRowNumber][0].value.length >= 1 && rows[usingRowNumber][1].value.length >= 1 && rows[usingRowNumber][2].value.length >= 1 && rows[usingRowNumber][3].value.length >= 1 && rows[usingRowNumber][4].value.length >= 1) {
		document.getElementById('submitAttempt').click();
	}
};

tryRow1Letter5Input.onkeyup = function() {
	if (this.value.length === 0) {
		tryRow1Letter4Input.select();
	}
	if (event.keyCode === 13 && rows[usingRowNumber][0].value.length >= 1 && rows[usingRowNumber][1].value.length >= 1 && rows[usingRowNumber][2].value.length >= 1 && rows[usingRowNumber][3].value.length >= 1 && rows[usingRowNumber][4].value.length >= 1) {
		document.getElementById('submitAttempt').click();
	}
};



var row1 = [tryRow1Letter1Input, tryRow1Letter2Input, tryRow1Letter3Input, tryRow1Letter4Input, tryRow1Letter5Input];
var row2 = [tryRow2Letter1Input, tryRow2Letter2Input, tryRow2Letter3Input, tryRow2Letter4Input, tryRow2Letter5Input];
var row3 = [tryRow3Letter1Input, tryRow3Letter2Input, tryRow3Letter3Input, tryRow3Letter4Input, tryRow3Letter5Input];
var row4 = [tryRow4Letter1Input, tryRow4Letter2Input, tryRow4Letter3Input, tryRow4Letter4Input, tryRow4Letter5Input];
var row5 = [tryRow5Letter1Input, tryRow5Letter2Input, tryRow5Letter3Input, tryRow5Letter4Input, tryRow5Letter5Input];

var rows = [row1, row2, row3, row4, row5];
var usingRowNumber = 0;

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
	for (var i = 0; i <= 4; i++) {
			rows[usingRowNumber][i].disabled = false;
		}
}
