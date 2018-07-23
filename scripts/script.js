"use strict";
let playerHealth = 40;
let grantHealth = 10;
let wins = 0;

const play = prompt(`Would you like to attempt to slay Grant, The Almighty Chicken?`);

if (play.toLowerCase() === `yes`) {
       const playerName = prompt(`Very well. What is your name, young warrior?`);
       console.log(`LET THE BATTLE BEGIN!!!!!`);


    while (playerHealth > 0) {
        playerHealth = playerHealth - Math.floor((Math.random() * 2) + 1);
        console.log(`${playerName} has ${playerHealth} health left.`);
        grantHealth = grantHealth - Math.floor((Math.random() * 2) + 1);
        console.log(`Grant, the Almighty Chicken has ${grantHealth} health left.`);
        if (grantHealth <= 0) {
            wins++;
            console.log(`You have defeated Grant, the Almighty Chicken ${wins} time(s)`);
            grantHealth = 10;
            if (wins === 3) {
                console.log(`CONGRATULATIONS!!!! YOU WON THE GAME!!!!!`);
                break;
            }
        }
        
    }
}