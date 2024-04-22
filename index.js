let randomNumber = Math.floor(Math.random() * 6) + 1; // random number between 0 and 6 inclusive inclusive 

let randomDiceImage = "dice" + randomNumber + ".png"; // image to generate random number

let randomImageSource = "images/" + randomDiceImage; // source of the image file to generate random number 

let image1 = document.querySelectorAll("img")[0]; // source of the image

image1.setAttribute("src", randomImageSource); // source of the image (random number will be generated automatically



let randomNumber1 = Math.floor(Math.random() * 6 + 1); // random number will be generated automatically

let randomImageSource1 = "images/dice" + randomNumber1  + ".png"; // will be generated automatically when  the image is  loaded

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource1); // will be generated automatically when the image is loaded

if (randomNumber > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
} else if (randomNumber1 > randomNumber) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}