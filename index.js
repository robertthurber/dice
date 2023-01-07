// all of that information for dice one 

// here we are generating a random number and assining it to a var
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// here we are taking a random number and adding the image name to it
var randomDice = "dice" + randomNumber1 + ".png";
// now we are fetching the dice out of our image folder 
var randomDiceSource = "images/" + randomDice;
// now we are getting the dice location in the DOM so it is easer to change 
var randomDiceImg = document.querySelectorAll("img")[0];
// here is were we are setting the new dice image to apear randommly 
randomDiceImg.setAttribute("src", randomDiceSource);

// all off the information for dice two

// here we are generating a random number and assining to a var
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//here we are taking our number and adding the image name to it
var randomDice2 = "dice" + randomNumber2 + ".png";
//here we are fetching our second dice from the image folder
var randomDiceSource2 = "images/" + randomDice2;
//here we are getting the dice location in the DOM so it is easier to work with 
var randomDiceImg2 = document.querySelectorAll("img")[1];
// here is where we are setting the new dice image to apear randomly
randomDiceImg2.setAttribute("src", randomDiceSource2);

//here is our condition logic that determins the winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "♥️ Player 1 Wins";
} else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins ♥️";
} else{
    document.querySelector("h1").innerHTML = "It's a Draw 😫"
}
