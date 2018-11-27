const { makeList , makeGrid , input } = require("./src/library.js")

const main = function(){
  let size = +input("Enter the size of grid : ");
  let list = makeList(size);
  let grid = makeGrid(list);
  console.log(grid);

}

main();

