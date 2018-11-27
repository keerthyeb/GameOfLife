const { makeList , makeGrid , input } = require("./src/library.js");
const {getGridSize,getAliveCells,getNoOfItterations} = require("./src/library.js");

const main = function() {
  let size = getGridSize(); 
  let list = makeList(size);
  let grid = makeGrid(list);
  console.log(grid);
  let aliveCells = getAliveCells();
  let itterations = getNoOfItterations(); 
  let inputArgs = {size,aliveCells,itterations};

}

main();

