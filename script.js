

function playerChoice(choice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    let resultMessage = '';
  
    if (choice === computerChoice) {
      resultMessage = 'It\'s a tie!';
    } else if (
      (choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')
    ) {
      resultMessage = 'You win!';
    } else {
      resultMessage = 'You lose!';
    }
  
    document.getElementById('result').innerText = `You chose ${choice}. Computer chose ${computerChoice}. ${resultMessage}`;
  }
  

