"use strict";
let playerHealth = 40;
let grantHealth = 10;
let wins = 0;

//calculates damage player and Grant will take
function getDamage() {
    let damage = Math.floor((Math.random() * 5) + 1);
    return damage;
}
//will end the game
function endGame() {
    break;
}
//The game will start automatically when the page loads
startGame();
//parent function that runs the game
function startGame() {
let play = prompt(`Would you like to attempt to slay Grant, The Almighty Chicken?`);
if (play.toLowerCase() === `yes`) {
    const playerName = prompt(`Very well. What is your name, young warrior?`);
    startCombat();
    //this function goes through a variety of choices for the playyer to make
    function startCombat() {
        let text;
        let aggressive = prompt(`Would you like to "attack" or "quit"?`);
        switch (aggressive) {
            case `attack`:
                combat();
            case `quit`:
                break;
            default:
                prompt(`That is not a valid response. Please use "attack" or "quit".`);
        }
        // if play chose "attack", damage will be done to player and Grant and check if anyone has "died"
        function combat() {
            playerHealth = playerHealth - getDamage();
            console.log(`${playerName} has ${playerHealth} health left.`);
            grantHealth = grantHealth - getDamage();
            console.log(`Grant, the Almighty Chicken has ${grantHealth} health left.`);
            //if this is met, player loses
            if (playerHealth <= 0) {
                console.log(`YOU HAVE BEEN DEFEATED!!!!`);
                endGame()
            }
            // if this is met, player defeats Grant once
            if (grantHealth <= 0) {
                wins++;
                console.log(`You have defeated Grant, the Almighty Chicken ${wins} time(s)`);
                grantHealth = 10;
                //if this is met, player wins
                if (wins === 3) {
                    console.log(`CONGRATULATIONS!!!! YOU WON THE GAME!!!!!`);
                    endGame();
                }
            }
            startCombat();
        }
            
        }
    }
}