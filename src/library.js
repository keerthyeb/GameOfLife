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
  let list  = new Array(size).fill("1");
  list = list.map( x => new Array(size).fill("*"));
  let value = 0;
  for( let index = 0 ; index < size; index ++){
    list[index] = list[index].map( x => value++)
  }
  return list;
}

const makeGrid = function(list){
  let gridArray = [];
  for(index = 0; index < list.length ; index++){
    gridArray[index] = generateRow(list[index]);
  }
  return gridArray.join("\n") ;
}

const generateRow = function(list){
  list =  list.map( x => justifyLength(x,3)+"|");
  return "|"+list.join("");
}

const findNeighboursIndex = function(position){
  return generateCartesianSquare([-1,0,1]).
    filter(isNotOrigin).map(delta => add(delta,position));
}
module.exports = { makeGrid ,
  makeNoList ,
  input ,
  generateRow };

