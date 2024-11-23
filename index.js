var randomnumber1=Math.floor(Math.random()*6) + 1;
var randomdice="dice"+randomnumber1+".png";
var randomsource="images/"+ randomdice;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomsource);


var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdice2="dice"+randomnumber2+".png";
var randomimagesource="images/"+randomdice2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimagesource);

if ( randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = " Player 1 Wins!";
  }
else if (randomnumber2>randomnumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins! ";
  }
else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  