let userScore =0;
let computerScore =0;
const userScore_span = document.getElementById ("user-score");
const computerScore_span =document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector (".result > p");
const sasso_div = document.getElementById ("s");
const carta_div = document.getElementById ("c");
const forbice_div = document.getElementById ("f");



function getComputerChoise() {
    const choises = ['s', 'c', 'f'];
    const randomNumber= Math.floor(Math.random() * 3);
    return choises [ randomNumber];
}

function convertToWord(letter) {
    if (letter ==="s") return "Sasso";
    if (letter === "c") return "Carta";
    return "Forbici";
}

function win(userChoise, computerChoise){
   userScore++;
      userScore_span.innerHTML = userScore;
      computerScore_span.innerHTML = computerScore;
      result_p.innerHTML = convertToWord (userChoise)+  " batte "  + convertToWord (computerChoise) + " .Hai Vinto! 🥳";
      document.getElementById(userChoise).classList.add('green-glow') ;
      setTimeout(function() {document.getElementById(userChoise).classList.remove('green-glow') }, 300);
}


function lose(userChoise, computerChoise){
  computerScore++;
      userScore_span.innerHTML = userScore;
      computerScore_span.innerHTML = computerScore;
      result_p.innerHTML = convertToWord (userChoise)+  " viene battuto da "  + convertToWord (computerChoise) + ". Hai Perso!  😭";
      document.getElementById(userChoise).classList.add('red-glow');
      setTimeout(function() {document.getElementById(userChoise).classList.remove('red-glow') }, 300);
}

function draw(userChoise, computerChoise){
    
    result_p.innerHTML = convertToWord (userChoise)+  " è uguale a "  + convertToWord (computerChoise) + " .Siete pari! 🤗 ";
    document.getElementById(userChoise).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(userChoise).classList.remove('gray-glow') }, 300);
}


function game(userChoise){
    const computerChoise= getComputerChoise();
    switch(userChoise + computerChoise) {
        case "sf":
        case "cs":
        case "fc":
            win(userChoise, computerChoise);
            break;
            case"sc":
            case "cf":
            case "fs":
            lose(userChoise, computerChoise);
            break;
            case"ss":
            case "ff":
            case "cc":
            draw(userChoise, computerChoise);
            break;
    }
} 

function main(){

 sasso_div.addEventListener('click', () =>
    game("s"))

 carta_div.addEventListener('click', () =>
    game("c"))
      
 forbice_div.addEventListener('click', () =>
    game("f"))

        }
 
main();