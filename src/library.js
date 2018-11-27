const readline = require("readline-sync");
const input = function(message) {
  let intake = readline.question(message);
  return intake;
}

const makeList = function(size){
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


const justifyLength = function(text, width) {
  let spaceWidth = width - text.toString().length;
  some =  text + new Array(spaceWidth).fill(' ').join('');
  return some;
}


const generateRow = function(list){
  list =  list.map( x => justifyLength(x,3)+"|");
  return "|"+list.join("");
}

module.exports = { makeGrid ,
  makeList ,
  input ,
  justifyLength ,
  generateRow };
