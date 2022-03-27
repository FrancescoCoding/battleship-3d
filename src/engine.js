/*
 ********************************************************************************
 * Player One Map
 ********************************************************************************
 */

// This is 4x4 water level with 6 true
let playerOnewater = [
  [false, true, true, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
];
// This is your ground level with 9 true
let playerOneGround = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
];
// This is your Air level with 5 true
let playerOneAir = [
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
];

/*
 ********************************************************************************
 * Player Two Map
 ********************************************************************************
 */

// This is 4x4 Water level with 6 true
let playerTwoWater = [
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [true, true, true, true],
];
// This is your Ground level with 9 true
let playerTwoGround = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
];
// This is your Air level with 5 true
let playerTwoAir = [
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
];

/*
 ********************************************************************************
 * Initialazing Board Games
 ********************************************************************************
 */
export const playerOneLevels = [playerOnewater, playerOneGround, playerOneAir];
export const playerTwoLevels = [playerTwoWater, playerTwoGround, playerTwoAir];
export const levels = [...playerTwoLevels];
export const lvlIDs = {
  water: 0,
  ground: 1,
  air: 2,
};

/*
 ********************************************************************************
 * This section contains the code for:
 * Checking Grid
 * Hitting Grid
 * HP
 ********************************************************************************
 */
// hitPlayerOne on Player 2 Map
const hitPlayerOne = (level, row, column) => {
  playerOneLevels[level][row][column] = false;
};
// Checkes the boolean state of a tile in PlauerOne grid
const checkPlayerOneGrid = (level, row, column) => {
  return playerOneLevels[level][row][column];
};
// Returns the current amount of lifepoints of player 1
const playerOneHp = () => {
  let count1 = 0;
  let totalCount1 = 0;
  for (let i = 0; i < playerOneLevels.length; i++) {
    for (let j = 0; j < playerOneLevels[i].length; j++) {
      for (let k = 0; k < playerOneLevels[i][j].length; k++) {
        if (playerOneLevels[i][j][k] === false) {
          count1++;
        }
        totalCount1++;
      }
    }
  }

  return totalCount1 - count1;
};

// hitPlayerTwo hit on Player one Map
const hitPlayerTwo = (level, row, column) => {
  playerTwoLevels[level][row][column] = false;
};
// Checkes the boolean state of a tile in PlauerTwo grid
export const checkPlayerTwoGrid = (level, row, column) => {
  return playerTwoLevels[level][row][column];
};
// Return the amount of life points of player 2
const playerTwoHp = () => {
  let count2 = 0;
  let totalCount2 = 0;
  for (let i = 0; i < playerTwoLevels.length; i++) {
    for (let j = 0; j < playerTwoLevels[i].length; j++) {
      for (let k = 0; k < playerTwoLevels[i][j].length; k++) {
        if (playerTwoLevels[i][j][k] === false) {
          count2++;
        }
        totalCount2++;
      }
    }
  }
  return totalCount2 - count2;
};

/*
 ********************************************************************************
 * Utility One Map
 ********************************************************************************
 */
// Returns true if the number is even
function isEven(n) {
  return n % 2 == 0;
}
//Returns true if the number is odd
function isOdd(n) {
  return Math.abs(n % 2) == 1;
}
// Random dice for level, column and row output format: 2,5,2
const opponent = () => {
  let rivalLevel = Math.floor(Math.random() * 3);
  let rows;
  let columns;
  if (rivalLevel === 0) {
    rows = Math.floor(Math.random() * 4);
    columns = Math.floor(Math.random() * 4);
  } else if (rivalLevel === 1) {
    rows = Math.floor(Math.random() * 5);
    columns = Math.floor(Math.random() * 5);
  } else if (rivalLevel === 2) {
    rows = Math.floor(Math.random() * 6);
    columns = Math.floor(Math.random() * 6);
  }

  return [rivalLevel, rows, columns];
};

/*
 ********************************************************************************
 * Game Engine
 ********************************************************************************
 */
// Initialize player names
const playerOneName = "Rafael";
const playerTwoName = "Francesco";

// Starts the game
export const startGame = () => {
  /*
   ********************************************************************************
   * Game Engine > Initial Setup
   ********************************************************************************
   */
  // Turns to false when one of the player HP has reach 0
  let endGame = true;
  // Random dice to choose who starts
  const firstTurnDice = Math.floor(Math.random() * 2);
  // Turn keeps track of who's turn it is.
  let turn = firstTurnDice;
  //This variable is used to check if a player got hit
  let hit = false;
  // A constant for the initial score of all players
  const totalScore = 2;
  //let minigame = 15;

  /*
   ********************************************************************************
   * Game Engine > Battle Loop
   ********************************************************************************
   */
  // Battle Starts
  while (endGame) {
    /*
     ********************************************************************************
     * Player One Turn
     ********************************************************************************
     */
    if (isEven(turn)) {
      console.log(playerOneName + "s turn");

      // Gets the current HP of PlayerTwo before hit
      let playerTwoPastHp = playerTwoHp();
      // Aks player one what coordinate to hit.
      //let playerOneMove = prompt(playerOneName + ", enter your coordinates");
      //put a mouse event here that waits for click and then returns the coordinates
      let playerOneMove = "001";
      //let playerOneMove = [2, 1, 1];
      // convert's user coordinates into an array of numbers
      playerOneMove = playerOneMove.split("");
      // Transforms the array of numbers to numbers
      playerOneMove = playerOneMove.map(Number);

      // Player One checks if there is a target to hit
      hit = checkPlayerTwoGrid(
        playerOneMove[0],
        playerOneMove[1],
        playerOneMove[2]
      );

      // Player One hits the target if there is one
      hitPlayerTwo(playerOneMove[0], playerOneMove[1], playerOneMove[2]);
      // If playerOne hits then he gets feedback and stats
      // If he misses he gets an alert
      // If after hitting the player 2 he has 0 points game ends.
      console.log(hit);
      if (hit || playerTwoHp() === 0) {
        console.log(
          "Hit " +
            `[${playerOneMove[0]}], [${playerOneMove[1]}], [${playerOneMove[2]}],`
        );
        console.log(playerTwoPastHp, "➡️", playerTwoHp());
        console.log(
          "Percentage destroyed:",
          (playerTwoPastHp - playerTwoHp()) / totalScore,
          "%"
        );
        // GAME OVER
        if (playerTwoHp() === 0) {
          endGame = false;
          console.log(playerOneName + " wins");
        }
      } else {
        console.log(
          "Miss" +
            `[${playerOneMove[0]}], [${playerOneMove[1]}], [${playerOneMove[2]}],`
        );
      }
    } else {
      /*
       ********************************************************************************
       * Player Two Turn
       ********************************************************************************
       */
      console.log(playerTwoName + "'s turn");
      // Gets the current HP of PlayerTwo before hit
      let playerOnePastHp = playerOneHp();

      //let playerTwoMove = prompt(playerTwoName + " enter your coordinates");
      // convert's user coordinates into an array of numbers
      //playerTwoMove = playerTwoMove.split("");
      // Transforms the array of numbers to numbers
      //playerTwoMove = playerTwoMove.map(Number);
      let playerTwoMove = opponent();

      let hit = checkPlayerOneGrid(
        playerTwoMove[0],
        playerTwoMove[1],
        playerTwoMove[2]
      );
      // Player Two hits the target if there is one
      hitPlayerOne(playerTwoMove[0], playerTwoMove[1], playerTwoMove[2]);
      // If playerTwo hits then he gets feedback and stats
      // If he misses he gets an alert
      // If after hitting the player 1 he has 0 points game ends.
      if (hit || playerTwoHp() === 0) {
        console.log("Hit");
        console.log(playerOnePastHp, "➡️", playerOneHp());
        console.log(
          "Percentage destroyed:",
          (playerOnePastHp - playerOneHp()) / totalScore,
          "%"
        );
        //Game Over
        if (playerOneHp() === 0) {
          endGame = false;
          console.log(playerTwoName + "wins");
        }
      } else {
        console.log("Missed");
      }
    }
    turn++;
    // minigame--;
    // if (minigame === 1) {
    //   endGame = false;
    // }
  }
};
console.log("#################################");
console.log("### START OF RAFAEL'S CODE ###");
console.log("### DO NOT TOUCH ################");
console.log("#################################");
//startGame();
export const startGameOnePlayer = coordinate => {
  const playerOneName = "Rafael";
  //console.log(coordinate);
  while (true) {
    // setTimeout of two seconds
    setTimeout(() => {}, 3000);

    let hit = false;
    // Turns to false when one of the player HP has reach 0
    let endGame = true;
    // A constant for the initial score of all players
    const totalScore = 4;
    //let minigame = 15;
    console.log(playerOneName + "s turn");

    // Gets the current HP of PlayerTwo before hit
    let playerTwoPastHp = playerTwoHp();
    // Aks player one what coordinate to hit.
    //let playerOneMove = prompt(playerOneName + ", enter your coordinates");
    //put a mouse event here that waits for click and then returns the coordinates
    let playerOneMove = coordinate;
    //let playerOneMove = [2, 1, 1];
    // convert's user coordinates into an array of numbers
    playerOneMove = playerOneMove.split("");
    // Transforms the array of numbers to numbers
    playerOneMove = playerOneMove.map(Number);
    // Player One checks if there is a target to hit
    hit = checkPlayerTwoGrid(
      playerOneMove[0],
      playerOneMove[1],
      playerOneMove[2]
    );

    // Player One hits the target if there is one
    hitPlayerTwo(playerOneMove[0], playerOneMove[1], playerOneMove[2]);
    // If playerOne hits then he gets feedback and stats
    // If he misses he gets an alert
    // If after hitting the player 2 he has 0 points game ends.

    if (hit || playerTwoHp() === 0) {
      console.log(
        "Hit " +
          `[${playerOneMove[0]}], [${playerOneMove[1]}], [${playerOneMove[2]}],`
        //return this coordinate to front end as sucessful hit true
      );

      // 1 / 4 * 100 = 75%
      //
      let percentage = ((totalScore - playerTwoHp()) / totalScore) * 100;

      console.log("Percentage destroyed:", percentage, "%");

      // GAME OVER
      if (playerTwoHp() === 0) {
        endGame = false;
        console.log(playerOneName + " wins");
      }
      return { hit, percentage, playerOneName };
    } else {
      let percentage = ((playerTwoPastHp - playerTwoHp()) / totalScore) * 100;
      console.log(
        "Miss" +
          `[${playerOneMove[0]}], [${playerOneMove[1]}], [${playerOneMove[2]}],`
        //return this value to fron-end for bad hit, false
      );
      return { hit, percentage, playerOneName };
    }
  }
};
