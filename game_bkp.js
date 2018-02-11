/* global words*/
var chosenWord = words[Math.floor(Math.random() * words.length)];
console.log(chosenWord);
var splitChosenWord;
var attempt;
var splitAttempt;
var rl = [];
var table = document.getElementsByTagName("table")[0];
var tryRow1Letter1Input = document.getElementById("tryRow1Letter1Input");
var tryRow1Letter2Input = document.getElementById("tryRow1Letter2Input");
tryRow1Letter2Input.focus();
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
var reset = document.getElementById("reset");
var row1 = [tryRow1Letter1Input, tryRow1Letter2Input, tryRow1Letter3Input, tryRow1Letter4Input, tryRow1Letter5Input];
var row2 = [tryRow2Letter1Input, tryRow2Letter2Input, tryRow2Letter3Input, tryRow2Letter4Input, tryRow2Letter5Input];
var row3 = [tryRow3Letter1Input, tryRow3Letter2Input, tryRow3Letter3Input, tryRow3Letter4Input, tryRow3Letter5Input];
var row4 = [tryRow4Letter1Input, tryRow4Letter2Input, tryRow4Letter3Input, tryRow4Letter4Input, tryRow4Letter5Input];
var row5 = [tryRow5Letter1Input, tryRow5Letter2Input, tryRow5Letter3Input, tryRow5Letter4Input, tryRow5Letter5Input];
var rows = [row1, row2, row3, row4, row5];
for (var i = 0; i <= 4; i++) {
	rows[i][0].placeholder = chosenWord[0];
}
for (var i = 0; i <= 4; i++) {
	rows[i][0].value = chosenWord.charAt(0);
}
var usingRowNumber;
usingRowNumber = 0;
table.onkeydown = function (e) {
	var target = e.srcElement || e.target;
	var maxLength = target.maxLength;
	var myLength = target.value.length;
	if (event.keyCode === 8) {
		rows[usingRowNumber].indexOf(target).value = "";
	}
	if (myLength >= maxLength && event.keyCode !== 8 || event.keyCode === 39) {
		var next = rows[usingRowNumber].indexOf(target);
		next++;
		if (next < 5) {
			rows[usingRowNumber][next].select();
		}
	} else if (myLength === 0 || event.keyCode === 37) {
		var previous = rows[usingRowNumber].indexOf(target);
		previous--;
		if (previous > 0) {
			rows[usingRowNumber][previous].select();
		}
	}
	if (event.keyCode === 13 && rows[usingRowNumber][0].value.length >= 1 && rows[usingRowNumber][1].value.length >= 1 && rows[usingRowNumber][2].value.length >= 1 && rows[usingRowNumber][3].value.length >= 1 && rows[usingRowNumber][4].value.length >= 1) {
		combineAttemptLettersAndCompareWithChosenWord();
	}
	//	if (target === rows[usingRowNumber][0]) {
	//		rows[usingRowNumber][0].value = chosenWord.charAt(0);
	//	}
};
submitAttempt.onclick = function () {
	combineAttemptLettersAndCompareWithChosenWord();
};
reset.onclick = function () {
	resetGame();
};

function combineAttemptLettersAndCompareWithChosenWord() {
	attempt = "";
	for (var i = 0; i <= 4; i++) {
		attempt += rows[usingRowNumber][i].value;
	}
	if (attempt.toLowerCase() === chosenWord) {
		for (i = 0; i <= 4; i++) {
			rows[usingRowNumber][i].style.backgroundColor = "#fb5454";
			rows[usingRowNumber][i].disabled = true;
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
var repeatedLettersCount = 0;

function comparSplitWordsRow() {
	rl = [];
	for (var r = 0; r <= 4; r++) {
		if (chosenWord.split(chosenWord[r]).length >= 3) {
			rl.push(chosenWord[r]);
		}
	}
	for (var i = 0; i <= 4; i++) {
		if (splitAttempt[i].toLowerCase() === splitChosenWord[i]) {
			rows[usingRowNumber][i].style.backgroundColor = "#fb5454";
			rows[usingRowNumber][i].disabled = true;
			var n = rows[usingRowNumber].indexOf(rows[usingRowNumber][i].parentElement.previousElementSibling.firstElementChild);
			if (rl.includes(splitAttempt[i])) {
				for (; n > 0; n--) {
					if (rows[usingRowNumber][n].value === splitAttempt[i]) {
						rows[usingRowNumber][n].style.backgroundColor = "#becfd6";
						rows[usingRowNumber][n].style.borderRadius = "5px";
						rows[usingRowNumber][n].disabled = true;
					}
				}
				repeatedLettersCount--;
				delete rl[rl.indexOf(splitAttempt[i])];
			}
		} else if (splitChosenWord.includes(splitAttempt[i].toLowerCase()) && rl.includes(splitAttempt[i])) {
			for (var k = 0; k <= 4; k++) {
				if (chosenWord.split(chosenWord[k]).length >= 3) {
					//console.log(chosenWord[k]);
					repeatedLettersCount = chosenWord.split(chosenWord[k]).length - 1;
				}
			}
			var x = rows[usingRowNumber].indexOf(rows[usingRowNumber][i].parentElement.previousElementSibling.firstElementChild);
			if (repeatedLettersCount > 0 && rl.includes(splitAttempt[i])) {
				rows[usingRowNumber][i].style.backgroundColor = "#cece2a";
				rows[usingRowNumber][i].style.borderRadius = "100%";
				rows[usingRowNumber][i].disabled = true;
				delete rl[rl.indexOf(splitAttempt[i])];
				if (rows[usingRowNumber][x].value === rows[usingRowNumber][i].value && rl.includes(splitAttempt[i])) {
					//console.log(rows[usingRowNumber][i].value + " - multiple letters detected");
					rows[usingRowNumber][i].style.backgroundColor = "#cece2a";
					rows[usingRowNumber][i].style.borderRadius = "100%";
					rows[usingRowNumber][i].disabled = true;
					delete rl[rl.indexOf(splitAttempt[i])];
					break;
				}
				delete rl[rl.indexOf(splitAttempt[i])];
			} else {
				for (; x >= 0; x--) {
					if (rows[usingRowNumber][x].value === rows[usingRowNumber][i].value) {
						//console.log(rows[usingRowNumber][i].value + " - multiple letters detected");
						rows[usingRowNumber][i].style.backgroundColor = "#becfd6";
						rows[usingRowNumber][i].style.borderRadius = "5px";
						rows[usingRowNumber][i].disabled = true;
						break;
					} else if (splitChosenWord.includes(splitAttempt[i].toLowerCase()) && rl.includes(splitAttempt[i])) {
						//console.log(rows[usingRowNumber][i].value + " - no multiple letters detected");
						rows[usingRowNumber][i].style.backgroundColor = "#cece2a";
						rows[usingRowNumber][i].style.borderRadius = "100%";
						rows[usingRowNumber][i].disabled = true;
						delete rl[rl.indexOf(splitAttempt[i])];
					}
				}
			}
			repeatedLettersCount--;

		} else {
			rows[usingRowNumber][i].style.backgroundColor = "#becfd6";
			rows[usingRowNumber][i].style.borderRadius = "5px";
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
			rows[usingRowNumber][i].style.backgroundColor = "#becfd6";
			rows[usingRowNumber][0].style.backgroundColor = "#fb5454";
			rows[usingRowNumber][1].focus();
		}
	}

}

//reset
function resetGame() {
	answerLetter1Input.value = "";
	answerLetter2Input.value = "";
	answerLetter3Input.value = "";
	answerLetter4Input.value = "";
	answerLetter5Input.value = "";
	usingRowNumber--;
	var rowReset;
	var cellReset;
	for (rowReset = 4; rowReset >= 0; rowReset--) {
		for (cellReset = 4; cellReset >= 0; cellReset--) {
			rows[rowReset][cellReset].value = "";
		}
	}

	for (rowReset = 4; rowReset >= 0; rowReset--) {
		for (cellReset = 4; cellReset >= 0; cellReset--) {
			if (cellReset === 0) {
				rows[rowReset][cellReset].disabled = true;
				rows[rowReset][cellReset].style.borderRadius = "5px";
				if (rowReset === 0) {
					rows[rowReset][cellReset].style.backgroundColor = "#fb5454";
					rows[rowReset][cellReset].style.borderRadius = "5px";
				} else {
					rows[rowReset][cellReset].style.backgroundColor = "#8a2d2d";
					rows[rowReset][cellReset].style.borderRadius = "5px";
				}
			} else if (rowReset === 0) {
				rows[rowReset][cellReset].disabled = false;
				rows[rowReset][cellReset].style.backgroundColor = "#becfd6";
				rows[rowReset][cellReset].style.borderRadius = "5px";
			} else {
				rows[rowReset][cellReset].disabled = true;
				rows[rowReset][cellReset].style.backgroundColor = "#585e61";
				rows[rowReset][cellReset].style.borderRadius = "5px";
				rows[rowReset][cellReset].style.borderRadius = "5px";
			}
		}
	}
	chosenWord = words[Math.floor(Math.random() * words.length)];
	console.log(chosenWord);
	for (cellReset = 0; cellReset <= 4; cellReset++) {
		rows[cellReset][0].placeholder = chosenWord[0];
	}
	for (cellReset = 0; cellReset <= 4; cellReset++) {
		rows[cellReset][0].value = chosenWord[0];
	}
	usingRowNumber = 0;
}

//var rl = [];
