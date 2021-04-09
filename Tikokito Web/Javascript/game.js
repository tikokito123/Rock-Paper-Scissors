let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomChoice = Math.floor(choices.length * Math.random());
    return choices[randomChoice];
}

function win(userInput){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = 'You\'ve Won!';
    document.getElementById(userInput).classList.add('green-glow');
    setTimeout(() => document.getElementById(userInput).classList.remove('green-glow'), 300);
}



function lose(userInput){
    computerScore++; 
    computerScore_span.innerHTML = computerScore;
    console.log(computerScore);
    result_div.innerHTML = 'You\'ve lost!';    
    document.getElementById(userInput).classList.add('red-glow');
    setTimeout(() => document.getElementById(userInput).classList.remove('red-glow'), 300);
}


function game(input){
    const compChoise = getComputerChoice();
    //case if draw
    if (input === compChoise){
        document.getElementById(input).classList.add('gray-glow');
        setTimeout(() => document.getElementById(input).classList.remove('gray-glow'), 300);
        return result_div.innerHTML = 'It\'s a draw!';  
    }
        
    
    switch(input + compChoise){
        //CASE IF THE USER WINS
        case 'rs':
        case 'pr':
        case 'sr':
            win(input);
            break;
        //CASE IF THE COMPUTER WINS
        case 'rp':
        case 'ps':
        case 'sr':
            lose(input);
            break;
               
    }
    
}

function main(){

    rock_div.addEventListener('click',() => {
        game('r');
    });
    paper_div.addEventListener('click',() => {
        game('p');
    });
    scissors_div.addEventListener('click',() => {
        game('s');
    });
}
    
main();