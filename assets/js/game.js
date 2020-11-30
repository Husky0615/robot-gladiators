var playerName = window.prompt("What is your robot's name?");
var playerMoney = 10;
var playerHealth = 100;
var playerAttack = 10;
// Log multiple items at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// created function
var fight = function(enemyName) {
    


    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to chose.");

    console.log(promptFight);

// if player chooses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // removed enemy's health by subtracting the amount set in the playerAttack
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName+ " now has " + enemyHealth + " Health remaining."
    );

    // check enemy's health
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove player's health by subtracting amount set in the enemyAttack
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip 
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money fro playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
        fight();
    }
} else {
    window.alert("You need to choose a valid option. Try again!");
}  
}

// executed function
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}