const deepEqual = require("assert").deepEqual;

const {
  makeNoList,
  makeGrid,
  generateRow,
  findNeighboursIndex
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

describe("Test findNeighboursIndex" , function(){
  it("should return array of positions of all neighbours of the given input position" , function(){
    let expectedOutput_0_1 = [[-1,0],[-1,1],[-1,2],[0,0],[0,2],[1,0],[1,1],[1,2]];
    let expectedOutput_1_1 = [[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]];
    deepEqual(findNeighboursIndex([0,1]),expectedOutput_0_1);
    deepEqual(findNeighboursIndex([1,1]),expectedOutput_1_1);
  });
});
