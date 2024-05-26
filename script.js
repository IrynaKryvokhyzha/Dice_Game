function rollDice(){

   let randomNumber1 =1+Math.floor(Math.random()*6)
   let randomNumber2 =1+Math.floor(Math.random()*6)

   let newLeftSrc = `./images/${randomNumber1}.png`
   let newRightSrc = `./images/${randomNumber2}.png`

   let leftImage = document.querySelectorAll("img")[0].setAttribute("src", newLeftSrc)
   let rightImage = document.querySelectorAll("img")[1].setAttribute("src", newRightSrc)

   if(randomNumber1>randomNumber2){
      document.querySelector("h1").innerHTML="Player 1 Wins!"
   }else if(randomNumber1<randomNumber2){
      document.querySelector("h1").innerHTML="Player 2 Wins!"

   }else{
      document.querySelector("h1").innerHTML="Draw"
   }
}

document.querySelector("button").addEventListener("click", rollDice)