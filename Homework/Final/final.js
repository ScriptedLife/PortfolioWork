var slides;
var currentSlide;
var slides2;
var currentSlide2;
var slides3;
var currentSlide3;

var slideInterval;
var slideInterval2;
var slideInterval3;

var total=3; 

var win = "You win";
var almost = "Not bad";
var lose = "Just give me your money";


function spin(){
    document.getElementById("spin").value = total;
}
function start(){ 
    startShow();
    startShow2();
    startShow3(); 
    total--;
    document.getElementById("spin").value = total;
    document.getElementById("button").disabled = true;
}

function stop(){
    clearInterval(slideInterval);
    clearInterval(slideInterval2);
    clearInterval(slideInterval3);

    winner();
    document.getElementById("stopbutton").disabled = true;
}

function startShow(){
    slides = document.querySelectorAll("li.slide");
    currentSlide = 2;
    slides[currentSlide].className = 'showing';
    slideInterval = setInterval(nextSlide, 225);
}

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide++;
    if(currentSlide >= slides.length)
        currentSlide = 0;
    slides[currentSlide].className = 'showing';
}

function startShow2(){
    slides2 = document.querySelectorAll("li.slide2");
    currentSlide2 = 2;
    slides2[currentSlide2].className = 'showing2';
    slideInterval2 = setInterval(nextSlide2, 300);
}

function nextSlide2(){
    slides2[currentSlide2].className = 'slide2';
    currentSlide2++;
    if(currentSlide2 >= slides2.length)
        currentSlide2 = 0;
    slides2[currentSlide2].className = 'showing2';
}

function startShow3(){
    slides3 = document.querySelectorAll("li.slide3");
    currentSlide3 = 2;
    slides3[currentSlide3].className = 'showing3';
    slideInterval3 = setInterval(nextSlide3, 190);
}

function nextSlide3(){
    slides3[currentSlide3].className = 'slide3';
    currentSlide3++;
    if(currentSlide3 >= slides3.length)
        currentSlide3 = 0;
    slides3[currentSlide3].className = 'showing3';
}

function winner(){
    if(currentSlide == currentSlide2 && currentSlide == currentSlide3){
        document.getElementById("input").value = win;
        total++;
        total++;
        document.getElementById("spin").value = total;
    }else if(currentSlide == currentSlide2 || currentSlide == currentSlide3 || currentSlide2 == currentSlide3){
        document.getElementById("input").value = almost;
        total++;
        document.getElementById("spin").value = total;
    } else {
        document.getElementById("input").value = lose;
        total--;
        document.getElementById("spin").value = total;
   }
}