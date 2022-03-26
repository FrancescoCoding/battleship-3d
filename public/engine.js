// create a 2d array of 4 by 4 which contain false booleans as a for loop
console.log("Air Grid");
const createGrid = (dimension, gridName) => {
  for (let i = 0; i < dimension; i++) {
    let row = [];
    for (let j = 0; j < dimension; j++) {
      row.push(false);
    }
    gridName.push(row);
  }
  return gridName;
};

let airGrid = [];
let groundGrid = [];
let waterGrid = [];
let gameGrids = [];

gameGrids.push(createGrid(6, airGrid));
gameGrids.push(createGrid(5, groundGrid));
gameGrids.push(createGrid(4, waterGrid));

console.log("grid 1", gameGrids);

// This function accepts an array of coordinates which change the false value
// to true
// const air = 1;
// const ground = 2;
// const water = 3;
// const column = [1, 2, 3, 4, 5, 6];
// const row = [1, 2, 3, 4, 5, 6];

gameGrids[0][0][0] = true;

console.log("grid 2", gameGrids);
