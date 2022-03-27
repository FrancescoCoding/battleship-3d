// This is your water level with 6 true
let water = [
  [false, true, true, true],
  [false, false, false, false],
  [false, false, false, false],
  [true, true, true, false],
];
// This is your ground level with 9 true
let ground = [
  [true, true, false, true, true],
  [true, true, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [true, false, false, true, true],
];
// This is your ground level with 5 true total = 20
let air = [
  [false, false, false, false, false, false],
  [true, true, false, true, false, false],
  [false, false, false, false, false, false],
  [false, true, false, false, false, false],
  [false, true, false, false, false, false],
  [false, false, false, false, false, false],
];

// write a 4 x 4 array of false booleans
let enemyWater = [
  [false, true, true, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
];
// write a 5 x 5 array of false booleans
let enemyGround = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
];
// write a 6 x 6 array of false booleans
let enemyAir = [
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
];

export const levels = [water, ground, air];
export const enemyLevels = [enemyWater, enemyGround, enemyAir];
export const lvlIDs = {
  water: 0,
  ground: 1,
  air: 2,
};

//checkGrid turns the coordinate of your grid
const checkGrid = (level, row, column) => {
  return levels[level][row][column];
};
// markGrid is the equivalent of the enemy hitting you.
const markGrid = (level, row, column) => {
  levels[level][row][column] = false;
};
// markEnemyGrid is the equivalent of hitting the enemy.
const markEnemyGrid = (level, row, column) => {
  enemyLevels[level][row][column] = false;
};

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

// Returns true if the number is even
function isEven(n) {
  return n % 2 == 0;
}
//Returns true if the number is odd
function isOdd(n) {
  return Math.abs(n % 2) == 1;
}

// Returns the current amount of lifepoints of player 1
const playerOneHP = () => {
  let count1 = 0;
  let totalCount1 = 0;
  for (let i = 0; i < levels.length; i++) {
    for (let j = 0; j < levels[i].length; j++) {
      for (let k = 0; k < levels[i][j].length; k++) {
        if (levels[i][j][k] === false) {
          count1++;
        }
        totalCount1++;
      }
    }
  }

  return totalCount1 - count1;
};
const playerTwoHp = () => {
  let count2 = 0;
  let totalCount2 = 0;
  for (let i = 0; i < enemyLevels.length; i++) {
    for (let j = 0; j < enemyLevels[i].length; j++) {
      for (let k = 0; k < enemyLevels[i][j].length; k++) {
        if (enemyLevels[i][j][k] === false) {
          count2++;
        }
        totalCount2++;
      }
    }
  }
  return totalCount2 - count2;
};
const startGame = () => {
  const playerOneWins = "player One wins";
  const playerTwoWins = "player Two wins";
  let turn = 2;
  let endGame = true;
  let miniGame = 0;
  let hit = false;
  while (endGame) {
    // If is my turn
    if (isEven(turn)) {
      console.log("My turn");

      //console.log("MY SCORE:", myScore());
      let enemyPastScore = playerTwoHp();
      // chrome p12opup with three intups
      //let playerOne = prompt("Player One, enter your coordinates");
      //let firstMove = prompt("Player One, enter your coordinates");
      // separate firstMove numbers into an array of ints
      let firstMove = "211";
      let firstMoveArray = firstMove.split("");
      // convert firstMoveArray to ints
      let firstMoveInts = firstMoveArray.map(Number);
      let hit = checkGrid(firstMoveInts[0], firstMoveInts[1], firstMoveInts[2]);
      markEnemyGrid(firstMoveInts[0], firstMoveInts[1], firstMoveInts[2]);
      if (hit || playerTwoHp() === 0) {
        console.log("Hit");
        console.log(enemyPastScore, "➡️", playerTwoHp());
      } else {
        console.log("Missed");
      }
      if (playerTwoHp() === 0) {
        endGame = false;
        console.log(playerOneWins);
      }
      //console.log("Coordinates:", firstMoveInts);
      //console.log("Hit:", hit);
      //console.log(enemyPastScore, "➡️", enemyScore());
      // iterate through levels and count number of false booleans

      //checkGrid(water, rowStrike, colStrike);
    } else {
      console.log("Opponent turn");
      //console.log("Enemy SCORE:", enemyScore());
      //console.log(myScore());
      let humanPastScore = playerOneHP();

      let move = opponent();
      let hit = checkGrid(move[0], move[1], move[2]);
      markGrid(move[0], move[1], move[2]);
      if (hit) {
        console.log("Hit");
        console.log(humanPastScore, "➡️", playerOneHP());
      } else {
        console.log("Missed");
      }
    }
    if (playerOneHP() === 0) {
      endGame = false;
      console.log(playerTwoWins);
    }
    miniGame--;
    if (miniGame === 0) {
      endGame = false;
    }
    turn++;
  }
};
console.log("#################################");
console.log("### START OF RAFAEL'S CODE ###");
console.log("### DO NOT TOUCH ################");
console.log("#################################");
startGame();
