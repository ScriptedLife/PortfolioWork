var random = Math.floor((Math.random() * 15) + 1);
var i=1;

function math () {

	images = document.querySelectorAll("li.image");
	currentImage = 0;
	images[currentImage].className='showing';	
	
}

function analyzeNum() {
	guessNum = document.mathForm.guess.value;
	
	if(guessNum > random) {
		document.mathForm.result.value = "Too high, like my dreams";
		wrong();
	}
	else if (guessNum < random) {
		document.mathForm.result.value = "Too low, like my grades";
		wrong();
	}
	else if (guessNum == random) {
		alert("You right");
        
	}
}

function wrong() {
	if (i < 5) {
		images[i].className='showing';
		i++;
	}
	
	if (i >= 5)
		alert("You done messed up");
}

function nextImage () {
	images[currentImage].className='slide';
	currentImage++;
	images[currentImage].className='showing';
}

