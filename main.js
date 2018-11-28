const { makeNoList , makeGrid , input } = require("./src/library.js");

const main = function() {
  let size = +input("Enter the size of grid : ");
  let world = makeNoList(size);
  let grid = makeGrid(world);
  console.log(grid);
  let aliveCells = input("Enter alive cells block numbers : ").split(",");
  let iterations = +input("How many times do you want to itterate : ");
  let inputArgs = {size,aliveCells,iterations};
}

main();

