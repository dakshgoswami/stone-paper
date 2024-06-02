        const message = document.querySelector(".win-lose");
        const container = document.querySelector(".container");
        const yourScore = document.querySelector("#user-score-add");
        const computerScore = document.querySelector("#computer-score-add");
        const playBtn = document.querySelectorAll(".btn-group");
        let userChoice = '';
        let userScore = 0;
        let compScore = 0;

        function userClick(choice) {
            userChoice = choice;
        }

        playBtn.forEach(function(playBtn){
            playBtn.addEventListener("click", function () {
                if (!userChoice) {
                    alert('Please select Rock, Paper, or Scissors first!');
                    return;
                }
                const choices = ['rock', 'paper', 'scissors'];
                const number = Math.floor((Math.random() * choices.length));
                const computerChoice = choices[number];
                // console.log(computerChoice);
        
                if (computerChoice === userChoice) {
                    message.innerHTML = "Match DRAW";
                } else if (
                    (userChoice === 'rock' && computerChoice === 'scissors') ||
                    (userChoice === 'paper' && computerChoice === 'rock') ||
                    (userChoice === 'scissors' && computerChoice === 'paper')
                ) {
                    yourScore.innerHTML = ++userScore;
                    // userScore += yourScore.innerHTML;
                    console.log(yourScore)
                    message.innerHTML = "You are Winner";
                    
                } else {
                    computerScore.innerHTML = ++compScore;
                    // compScore += computerScore.innerHTML;
                    console.log(computerScore)
                    message.innerHTML = "You are Lost";
                }
        })

        });