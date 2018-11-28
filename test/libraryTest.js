const deepEqual = require("assert").deepEqual;

const {
  makeNoList,
  makeGrid,
  generateRow,
  findNeighboursPositions,
  findAliveNeighbours,
  isValidPosition,
  findNeighbours
} = require("../src/library.js");

describe("Test MakeList" , function(){
  it(" Should make size*size array if size is given" , function(){
    deepEqual(makeNoList(2),[[0,1],[2,3]]);
    deepEqual(makeNoList(1),[[0]]);
  });
});

describe("Test MakeGrid" , function(){
  it("should return the grid of size same as of the length of input array" , function(){
    deepEqual(makeGrid([[0,1],[2,3]]),"|0  |1  |\n|2  |3  |");
    deepEqual(makeGrid([[0]]),"|0  |");
  });
});

describe("Test generateRow" , function(){
  it("should return a row with pipes in between the elements" , function(){
    deepEqual(generateRow([0,1]),"|0  |1  |");
    deepEqual(generateRow([0]),"|0  |");
  });
});

describe("Test findNeighboursPositions" , function(){
  it("should return array of positions of all neighbours of the given input position" , function(){
    let expectedOutput_0_1 = [[-1,0],[-1,1],[-1,2],[0,0],[0,2],[1,0],[1,1],[1,2]];
    let expectedOutput_1_1 = [[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]];
    deepEqual(findNeighboursPositions([0,1]),expectedOutput_0_1);
    deepEqual(findNeighboursPositions([1,1]),expectedOutput_1_1);
  });
});

describe("Test findAliveNeighbours" , function(){
  it("should return an array with alive neighbours for the input position" , function(){
    let world = [['a','d','d'],['a','d','d'],['a','d','d']];
    deepEqual(findAliveNeighbours(world,[1,1]),['a','a','a']);
    deepEqual(findAliveNeighbours(world,[0,0]),['a']);
    deepEqual(findAliveNeighbours(world,[1,0]),['a','a']);
    deepEqual(findAliveNeighbours(world,[2,2]),[]);
  });
});

describe("Test isValidPosition" , function(){
  it("should return an array with alive neighbours for the input position" , function(){
    let world = [['a','d','d'],['a','d','d'],['a','d','d']];
    deepEqual(isValidPosition(world,[1,4]),false);
    deepEqual(isValidPosition(world,[1,1]),true);
    deepEqual(isValidPosition(world,[0,-1]),false);
    deepEqual(isValidPosition(world,[2,2]),true);
  });
});

describe("Test findNeighbours" , function(){
  it("should return an array with alive neighbours for the input position" , function(){
    let world = [['a','d','d'],['a','d','d'],['a','d','d']];
    deepEqual(findNeighbours(world,[1,1]),["a","d","d","a","d","a","d","d"]);
    deepEqual(findNeighbours(world,[0,2]),["d","d","d"]);
    deepEqual(findNeighbours(world,[0,1]),["a","d","a","d","d"]);
  });
});
