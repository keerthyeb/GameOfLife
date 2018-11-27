const deepEqual = require("assert").deepEqual;

const {
  makeList,
  makeGrid,
  justifyLength,
  generateRow
} = require("../src/library.js");

describe("MakeList" , function(){
  it(" Should make size*size array if size is given" , function(){
    deepEqual(makeList(2),[[0,1],[2,3]]);
    deepEqual(makeList(1),[[0]]);
  });
});

describe("MakeGrid" , function(){
  it("should return the grid of size same as of the length of input array" , function(){
    deepEqual(makeGrid([[0,1],[2,3]]),"|0  |1  |\n|2  |3  |");
    deepEqual(makeGrid([[0]]),"|0  |");
  });
});


describe("justifyLength" , function(){
  it("should return justified text " , function(){
    deepEqual(justifyLength("1",3),"1  ");
    deepEqual(justifyLength("14",3),"14 ");
  });
});

describe("generateRow" , function(){
  it("should return a row with pipes in between the elements" , function(){
    deepEqual(generateRow([0,1]),"|0  |1  |");
    deepEqual(generateRow([0]),"|0  |");
  });
});
