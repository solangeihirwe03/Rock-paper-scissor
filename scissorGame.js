const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissor'){
        return userInput;
    }
    return 'error!';

}
const userChoice = getUserChoice('paper')
console.log('you got '+ userChoice)
 const computerChoice = ()=>{
    let random = Math.floor(Math.random()*3)
    if(random === 0){
        return 'rock';
    }
    else if(random === 1){
        return 'paper';
    }
    else if(random === 2){
        return 'scissor'
    }   

}
const compChoice = computerChoice();
console.log('computer get ' + compChoice)
const determineWinner = ()=>{
    if(userChoice === compChoice){
        return 'you got the same choice the game is tie';
    }
    
    else if(userChoice === 'rock'){
        if(compChoice === 'paper')
        {
            return 'computer wons!' ;
        }
        else {
            return 'you won!';
        }
    }
    else if(userChoice === 'paper'){
        if(compChoice === 'scissor'){
            return 'computer wons!'
        }
        else{
            return ' you won!';
        }
    }
    else if(userChoice === 'scissor'){
        if(compChoice === 'rock'){
            return 'computer wons!'
        }
        else{
            return 'you won!';
        }
    }
    
}
console.log(determineWinner());