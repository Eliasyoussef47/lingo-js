/* global words*/
var chosenWord = words[Math.floor(Math.random() * words.length)];
console.log(chosenWord);
var chosenWordCopy = chosenWord.split("");
var attempt;
var res = [0, 0, 0, 0, 0];
var table = document.getElementsByTagName("table")[0];

for (var o = 1; o <= 6; o++) {
	if (o <= 5) {
		var tr = document.createElement("TR");
		tr.setAttribute("id", "tryRow" + o);
		tr.classList.add("tableRow");
		tr.classList.add("tryTableRow");
		var th = document.createElement("TH");
		th.classList.add("rowTitle");
		var t = document.createTextNode("Poging " + o);
		th.appendChild(t);
		tr.appendChild(th);
		for (var i = 1; i <= 5; i++) {
			var td = document.createElement("TD");
			td.setAttribute("id", "tryRow" + o + "Letter" + i);
			td.classList.add("tryRowLetter");
			td.classList.add("tryRow" + o + "Letter");
			var input = document.createElement("INPUT");
			input.setAttribute("type", "text");
			input.setAttribute("id", "tryRow" + o + "Letter" + i + "Input");
			input.classList.add("tryRowLetterInput");
			input.classList.add("tryRow" + o + "LetterInput");
			input.setAttribute("maxlength", "1");
			td.appendChild(input);
			if (o > 1) {
				input.disabled = true;
			}
			tr.appendChild(td);
		}
	} else if (o > 5) {
		var tr = document.createElement("TR");
		tr.setAttribute("id", "answer");
		tr.classList.add("tableRow");
		var th = document.createElement("TH");
		th.setAttribute("id", "answerRowTitle");
		th.classList.add("rowTitle");
		var t = document.createTextNode("Antwoord");
		th.appendChild(t);
		tr.appendChild(th);

		for (var i = 1; i <= 5; i++) {
			var td = document.createElement("TD");
			td.setAttribute("id", "answerLetter" + i);
			td.classList.add("tryRowLetter");
			td.classList.add("answerLetter");
			var input = document.createElement("INPUT");
			input.setAttribute("type", "text");
			input.setAttribute("id", "answerLetter" + i + "Input");
			input.classList.add("tryRowLetterInput");
			input.classList.add("answerLetterInput");
			input.setAttribute("maxlength", "1");
			input.disabled = true;
			td.appendChild(input);
			tr.appendChild(td);
		}
	}
	table.appendChild(tr);
}

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
var usingRowNumber = 0;

table.onkeydown = function (e) {
	var target = e.srcElement || e.target;
	var maxLength = target.maxLength;
	var myLength = target.value.length;
	if (event.keyCode === 8) {
		target.innerHTML = "";
	}
	if (myLength >= maxLength && event.keyCode !== 8) {
		var next = rows[usingRowNumber].indexOf(target);
		next++;
		if (next < 5) {
			rows[usingRowNumber][next].select();
		}
	} else if (myLength === 0 && event.keyCode === 8) {
		var previous = rows[usingRowNumber].indexOf(target);
		previous--;
		if (previous > 0) {
			rows[usingRowNumber][previous].select();
		}
	}
	if (event.keyCode === 13 && rows[usingRowNumber][0].value.length >= 1 && rows[usingRowNumber][1].value.length >= 1 && rows[usingRowNumber][2].value.length >= 1 && rows[usingRowNumber][3].value.length >= 1 && rows[usingRowNumber][4].value.length >= 1) {
		combineAttemptLettersAndCompareWithChosenWord();
	}
};




submitAttempt.onclick = function () {
	combineAttemptLettersAndCompareWithChosenWord();
};
reset.onclick = function () {
	resetGame();
};

function combineAttemptLettersAndCompareWithChosenWord() {
	res = [0, 0, 0, 0, 0];
	attempt = "";
	for (var i = 0; i <= 4; i++) {
		attempt += rows[usingRowNumber][i].value;
	}
	chosenWordCopy = chosenWord.split("");
	for (var a = 0; a <= 4; a++) {
		if (attempt[a].toLowerCase() === chosenWordCopy[a]) {
			res[a] = 2;
			chosenWordCopy[a] = -1;
		}
	}
	for (var b = 0; b <= 4; b++) {
		if (chosenWordCopy.includes(attempt[b].toLowerCase()) && chosenWordCopy[chosenWordCopy.indexOf(attempt[b])] !== -1 && res[b] !== 2) {
			res[b] = 1;
			chosenWordCopy[chosenWordCopy.indexOf(attempt[b])] = -1;
		}
	}
	for (var c = 0; c <= 4; c++) {
		if (res[c] === 2) {
			rows[usingRowNumber][c].style.backgroundColor = "#fb5454";
			rows[usingRowNumber][c].disabled = true;
		} else if (res[c] === 1) {
			rows[usingRowNumber][c].style.backgroundColor = "#cece2a";
			rows[usingRowNumber][c].style.borderRadius = "100%";
			rows[usingRowNumber][c].disabled = true;
		} else if (res[c] === 0) {
			rows[usingRowNumber][c].style.backgroundColor = "#becfd6";
			rows[usingRowNumber][c].disabled = true;
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
	} else if (res[0] === 2 && res[1] === 2 && res[2] === 2 && res[3] === 2 && res[4] === 2) {
		answerLetter1Input.value = chosenWord[0];
		answerLetter2Input.value = chosenWord[1];
		answerLetter3Input.value = chosenWord[2];
		answerLetter4Input.value = chosenWord[3];
		answerLetter5Input.value = chosenWord[4];
	} else {
		for (var d = 0; d <= 4; d++) {
			rows[usingRowNumber][d].disabled = false;
			rows[usingRowNumber][d].style.backgroundColor = "#becfd6";
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
	chosenWordCopy = chosenWord.split("");
	for (cellReset = 0; cellReset <= 4; cellReset++) {
		rows[cellReset][0].placeholder = chosenWord[0];
	}
	for (cellReset = 0; cellReset <= 4; cellReset++) {
		rows[cellReset][0].value = chosenWord[0];
	}
	usingRowNumber = 0;
	tryRow1Letter2Input.focus();
}

//old
//rl = [];
//	for (var r = 0; r <= 4; r++) {
//		if (chosenWord.split(chosenWord[r]).length >= 3) {
//			rl.push(chosenWord[r]);
//		}
//	}
