var randomnumber=Math.floor((Math.random()*6)+1);
var randomImg1="./images/dice"+randomnumber+".png";
document.querySelector(".dice .img1").setAttribute("src",randomImg1);

var randomnumber2=Math.floor((Math.random()*6)+1);
var randomImg2="./images/dice"+randomnumber2+".png";
document.querySelector(".dice .img2").setAttribute("src",randomImg2);

if (randomnumber>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}

else if (randomnumber<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";

}

else{
    document.querySelector("h1").innerHTML="It is a Draw Match";
}