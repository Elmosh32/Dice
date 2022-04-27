
var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
var image1 = document.querySelectorAll(".img1")[0];
image1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
var image2 = document.querySelectorAll(".img2")[0];
image2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

var header = document.querySelector("h1");
if(randomNumber1>randomNumber2){
  header.innerHTML = '<i class="fa-solid fa-trophy"></i>'+" Player 1 Wins!";
}else if(randomNumber1<randomNumber2){
  header.innerHTML = "Player 2 Wins! "+'<i class="fa-solid fa-trophy"></i>';
}else {
  header.innerHTML = "Draw!";
}
