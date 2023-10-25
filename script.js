// get values out of localstorage
let score = JSON.parse(localStorage.getItem('score')); 

if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}

function playGame(playerMove) {
  const computerMove = pickComputerMove(); 
   // Compare the moves to get the result

    let result = '';

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
      result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }
     } else if(playerMove === 'paper') {                  
        if (computerMove === 'rock') {
          result = 'You win.';
        }else if (computerMove === 'paper') {
        result = 'Tie.';
        } else if (computerMove === 'scissors') {
          result = 'You lose.';
        }
        
    } else if(playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    } 
    
    //Display score
    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }

    /*variables are temporary so we use local storage to store data permenently if we refresh the website.local storage only supports string*/
 
    localStorage.setItem('score', JSON.stringify(score)); //converts score(object) to json string
    
    //Display result
    updateScoreElement();
    
    document.querySelector('.js-result')
    .innerHTML = result;

    document.querySelector('.js-moves')
     .innerHTML = `You
     <img class="move-icon" src="${playerMove}-emoji.png">
     <img class="move-icon" src="${computerMove}-emoji.png">
     Computer`;
}

   function updateScoreElement() {
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
   }


function pickComputerMove() {
  //Computer randomly selects a move 
  const randomNumber = Math.random();

  let computerMove = '';

    if (randomNumber >=0 && randomNumber < 1 / 3 ) {
            computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2 / 3) {
            computerMove = 'paper'
    } else if (randomNumber >=2/3 && randomNumber < 1) {
            computerMove = 'scissors';
    }

  return computerMove;
}

