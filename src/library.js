const readline = require("readline-sync");
const { generateCartesianSquare, 
  generateCartesianProduct,
  justifyLength,
  isNotOrigin, 
  add} = require("./util.js");

const input = function(message) {
  let intake = readline.question(message);
  return intake;
};

const makeNoList = function(size){
  let world  = new Array(size).fill("1");
  world = world.map( x => new Array(size).fill("*"));
  let value = 0;
  for( let index = 0 ; index < size; index ++){
    world[index] = world[index].map( x => value++)
  }
  return world;
}

const makeGrid = function(world){
  let gridArray = [];
  for(index = 0; index < world.length ; index++){
    gridArray[index] = generateRow(world[index]);
  }
  return gridArray.join("\n") ;
}

const generateRow = function(list){
  list =  list.map( x => justifyLength(x,3)+"|");
  return "|"+list.join("");
}

const findNeighboursPositions = function(currPosition){
  return generateCartesianSquare([-1,0,1]).
    filter(isNotOrigin).map(delta => add(delta,currPosition));
}

const isValidPosition = function(world,currPosition){
  let row = currPosition[0];
  let column = currPosition[1];
  return (world[row] != undefined && world[column] != undefined)
}

const findNeighbours = function(world,currPosition){ 
  let neighboursPositions = findNeighboursPositions(currPosition);
  let neighbours = [];
  return neighboursPositions.filter(isValidPosition.bind(null,world)).
    map(position => world[position[0]][position[1]]);
}

const findAliveNeighbours = function(list,position){
  return findNeighbours(list,position).filter( x => x == "a");
}

module.exports = { makeGrid ,
  makeNoList ,
  input ,
  findNeighbours,
  findNeighboursPositions,
  isValidPosition,
  findAliveNeighbours,
  generateRow };

