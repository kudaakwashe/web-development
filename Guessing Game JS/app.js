let maximum = parseInt(prompt("Enter a number"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum)

let guess = parseInt(prompt("Enter a guess"));
let attempts = 1;

while (parseInt(guess) !== targetNum){
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high, enter again");
    } else {
            guess = prompt("Too low, enter again");
    }
}
if (guess === 'q'){
    console.log("Ok, you quit")
} else {
    console.log("Congrats")
    console.log(`You got it, it took you ${attempts} guess(es)`)
}
