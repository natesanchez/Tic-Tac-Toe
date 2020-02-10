let boxes = document.querySelectorAll(".boxes")

let resetButton = document.querySelector("button");

let box1 = document.querySelector(".box1")

let box2 = document.querySelector(".box2")

let box3 = document.querySelector(".box3")

let box4 = document.querySelector(".box4")

let box5 = document.querySelector(".box5")

let box6 = document.querySelector(".box6")

let box7 = document.querySelector(".box7")

let box8 = document.querySelector(".box8")

let box9 = document.querySelector(".box9")

let gameTracker = 0

let turn = document.querySelector(".turn")

resetButton.addEventListener("click",resetGame)


boxes.forEach(item => {
	item.addEventListener("click", changeColor)
})

function timeOutWinRed() {
  setTimeout(function(){ 
  	alert("Red Wins!"); }, 50);
}

function timeOutWinBlue() {
  setTimeout(function(){ 
  	alert("Blue Wins!"); }, 50);
}

function timeOutTie() {
  setTimeout(function(){ 
  	alert("It's a Tie!"); }, 50);
}

function tracker () {
	gameTracker = gameTracker + 1;
}


function changeColor (e) {
	e.preventDefault();
	if (gameTracker % 2 === 0) {
		e.target.style.background = "red";
		turn.innerText = "Blue's Turn"
		tracker();
	} else {
		e.target.style.background = "blue";
		turn.innerText = "Red's Turn"
		tracker();
	}
	e.target.removeEventListener("click", changeColor)
	checkforWinner();
}

function resetGame () {
	gameTracker = 0;
	box1.style.background="white"
	box2.style.background="white"
	box3.style.background="white"
	box4.style.background="white"
	box5.style.background="white"
	box6.style.background="white"
	box7.style.background="white"
	box8.style.background="white"
	box9.style.background="white"
	boxes.forEach(item => {
	item.addEventListener("click", changeColor)
	})
	turn.innerText="Red's Turn";
}

function checkforWinner () {
	if (box1.style.background === "red" && box2.style.background ==="red" && box3.style.background === "red") {
		timeOutWinRed();
		turn.innerText="Red Wins!";
		box1.style.background="red"
		box2.style.background="red"
		box3.style.background="red"
		box4.style.background="red"
		box5.style.background="red"
		box6.style.background="red"
		box7.style.background="red"
		box8.style.background="red"
		box9.style.background="red"
	} else if (box4.style.background === "red" && box5.style.background ==="red" && box6.style.background === "red") {
		timeOutWinRed();
		turn.innerText="Red Wins!";
		box1.style.background="red"
		box2.style.background="red"
		box3.style.background="red"
		box4.style.background="red"
		box5.style.background="red"
		box6.style.background="red"
		box7.style.background="red"
		box8.style.background="red"
		box9.style.background="red"
	} else if (box7.style.background === "red" && box8.style.background ==="red" && box9.style.background === "red") {
		timeOutWinRed();
		turn.innerText="Red Wins!";
		box1.style.background="red"
		box2.style.background="red"
		box3.style.background="red"
		box4.style.background="red"
		box5.style.background="red"
		box6.style.background="red"
		box7.style.background="red"
		box8.style.background="red"
		box9.style.background="red"
	} else if (box1.style.background === "red" && box4.style.background ==="red" && box7.style.background === "red") {
		timeOutWinRed();
		turn.innerText="Red Wins!";
		box1.style.background="red"
		box2.style.background="red"
		box3.style.background="red"
		box4.style.background="red"
		box5.style.background="red"
		box6.style.background="red"
		box7.style.background="red"
		box8.style.background="red"
		box9.style.background="red"
	} else if (box2.style.background === "red" && box5.style.background ==="red" && box8.style.background === "red") {
		timeOutWinRed();
		turn.innerText="Red Wins!";
		box1.style.background="red"
		box2.style.background="red"
		box3.style.background="red"
		box4.style.background="red"
		box5.style.background="red"
		box6.style.background="red"
		box7.style.background="red"
		box8.style.background="red"
		box9.style.background="red"
	} else if (box3.style.background === "red" && box6.style.background ==="red" && box9.style.background === "red") {
		timeOutWinRed();
		box1.style.background="red"
		box2.style.background="red"
		box3.style.background="red"
		box4.style.background="red"
		box5.style.background="red"
		box6.style.background="red"
		box7.style.background="red"
		box8.style.background="red"
		box9.style.background="red"
		turn.innerText="Red Wins!";
	} else if (box1.style.background === "red" && box5.style.background ==="red" && box9.style.background === "red") {
		timeOutWinRed();
		turn.innerText="Red Wins!";
		box1.style.background="red"
		box2.style.background="red"
		box3.style.background="red"
		box4.style.background="red"
		box5.style.background="red"
		box6.style.background="red"
		box7.style.background="red"
		box8.style.background="red"
		box9.style.background="red"
	} else if (box3.style.background === "red" && box5.style.background ==="red" && box7.style.background === "red") {
		timeOutWinRed();
		turn.innerText="Red Wins!";
		box1.style.background="red"
		box2.style.background="red"
		box3.style.background="red"
		box4.style.background="red"
		box5.style.background="red"
		box6.style.background="red"
		box7.style.background="red"
		box8.style.background="red"
		box9.style.background="red"
	} else if (box4.style.background === "blue" && box5.style.background ==="blue" && box6.style.background === "blue") {
		timeOutWinBlue();
		turn.innerText="Blue Wins!";
		box1.style.background="blue"
		box2.style.background="blue"
		box3.style.background="blue"
		box4.style.background="blue"
		box5.style.background="blue"
		box6.style.background="blue"
		box7.style.background="blue"
		box8.style.background="blue"
		box9.style.background="blue"
	} else if (box7.style.background === "blue" && box8.style.background ==="blue" && box9.style.background === "blue") {
		timeOutWinBlue();
		box1.style.background="blue"
		box2.style.background="blue"
		box3.style.background="blue"
		box4.style.background="blue"
		box5.style.background="blue"
		box6.style.background="blue"
		box7.style.background="blue"
		box8.style.background="blue"
		box9.style.background="blue"
		turn.innerText="Blue Wins!"; 
	} else if (box1.style.background === "blue" && box4.style.background ==="blue" && box7.style.background === "blue") {
		timeOutWinBlue();
		box1.style.background="blue"
		box2.style.background="blue"
		box3.style.background="blue"
		box4.style.background="blue"
		box5.style.background="blue"
		box6.style.background="blue"
		box7.style.background="blue"
		box8.style.background="blue"
		box9.style.background="blue"
		turn.innerText="Blue Wins!";
	} else if (box2.style.background === "blue" && box5.style.background ==="blue" && box8.style.background === "blue") {
		timeOutWinBlue();
		box1.style.background="blue"
		box2.style.background="blue"
		box3.style.background="blue"
		box4.style.background="blue"
		box5.style.background="blue"
		box6.style.background="blue"
		box7.style.background="blue"
		box8.style.background="blue"
		box9.style.background="blue"
		turn.innerText="Blue Wins!";
	} else if (box3.style.background === "blue" && box6.style.background ==="blue" && box9.style.background === "blue") {
		timeOutWinBlue();
		box1.style.background="blue"
		box2.style.background="blue"
		box3.style.background="blue"
		box4.style.background="blue"
		box5.style.background="blue"
		box6.style.background="blue"
		box7.style.background="blue"
		box8.style.background="blue"
		box9.style.background="blue"
		turn.innerText="Blue Wins!";
	} else if (box1.style.background === "blue" && box5.style.background ==="blue" && box9.style.background === "blue") {
		timeOutWinBlue();
		box1.style.background="blue"
		box2.style.background="blue"
		box3.style.background="blue"
		box4.style.background="blue"
		box5.style.background="blue"
		box6.style.background="blue"
		box7.style.background="blue"
		box8.style.background="blue"
		box9.style.background="blue"
		turn.innerText="Blue Wins!";
	} else if (box3.style.background === "blue" && box5.style.background ==="blue" && box7.style.background === "blue") {
		timeOutWinBlue();
		box1.style.background="blue"
		box2.style.background="blue"
		box3.style.background="blue"
		box4.style.background="blue"
		box5.style.background="blue"
		box6.style.background="blue"
		box7.style.background="blue"
		box8.style.background="blue"
		box9.style.background="blue"
		turn.innerText="Blue Wins!"
	} else {
		checkForTie();
	}
}


function checkForTie () {
	if (gameTracker===9) {
		turn.innerText="It's a Tie!"
		timeOutTie();
	}
}






