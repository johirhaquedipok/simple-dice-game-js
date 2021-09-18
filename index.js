
//johir haque dipoks solution

var diceImage = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png","images/dice5.png", "images/dice6.png"];

var resultH1 = document.querySelector('h1');

var dice1 = document.querySelector('.img1');
var dice2 = document.querySelector('.img2');

var randomNumber = diceImage[Math.floor(Math.random()*diceImage.length)];
var randomNumber2 = diceImage[Math.floor(Math.random()*diceImage.length)];


dice1.setAttribute("src", randomNumber);
dice2.setAttribute("src", randomNumber2);

 if(diceImage.indexOf(randomNumber) > diceImage.indexOf(randomNumber2)){
     resultH1.innerText = "Player 1 Wins";
 } else if(diceImage.indexOf(randomNumber) < diceImage.indexOf(randomNumber2)) {
    resultH1.innerText = "Player 2 Wins";
 } else {
    resultH1.innerText = "Tie";
 }
 



 // Angela Yu's solution

/* var randomNumber1 = Math.floor(Math.random() *6) +1; //1-6 random number
var randomNumber2 = Math.floor(Math.random() *6) +1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - dice6.png

var image1 = document.querySelectorAll('img')[0];

image1.setAttribute("src", randomImageSource);


var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - dice6.png

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 1 wins';
}else if (randomNumber2 < randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 2 wins';
} else  {
    document.querySelector('h1').innerHTML = 'Draw';
} */