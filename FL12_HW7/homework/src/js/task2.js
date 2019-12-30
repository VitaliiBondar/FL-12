let play = confirm('Do you want to play a game?');
let userNumber, randomNumber, maxNumber = 8, attempts = 3, prize = 0, startMaxPrice = 100, maxPrize = 100;
const START_ATTEMPTS=3, TWO=2, FOUR=4;
if (play) {
    randomNumber = Math.floor(Math.random() * (maxNumber + 1));
    while (attempts > 0) {
        userNumber = parseInt(prompt(`Choose a roulette pocket number from 0 to ${maxNumber}
Attempt left: ${attempts}
Total prize: ${prize}$
Possible prize on current attempt: ${maxPrize}$`));
        if (userNumber === randomNumber) {
            prize += maxPrize;
            if (confirm(`Congratulation! Your prize is:${prize}$ Do you want to continue?`)) {
                attempts = START_ATTEMPTS;
                maxPrize = startMaxPrice * TWO;
                startMaxPrice = maxPrize;
                maxNumber += FOUR;
                randomNumber = Math.floor(Math.random() * (maxNumber + 1));
            } else {
                break;
            }
        } else {
            maxPrize = Math.floor(maxPrize / TWO);
            attempts--;
        }
    }
    alert(`Thank you for a game. Your prize is: ${prize}$`);
} else {
    alert('You did not become a millionaire, but can.');
}