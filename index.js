var randomNumber1=Math.floor(Math.random()*6)+1;
var randomdicenumber1="dice"+randomNumber1+".png";
var randomdice1="images/"+randomdicenumber1;
document.querySelectorAll("img")[0].setAttribute("src",randomdice1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdicenumber2="dice"+randomNumber2+".png";
var randomdice2="images/"+randomdicenumber2;
document.querySelectorAll("img")[1].setAttribute("src",randomdice2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins🎉";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins🎉";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}