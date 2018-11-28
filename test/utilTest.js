const deepEqual = require("assert").deepEqual;
const { generateCartesianSquare, 
  generateCartesianProduct,
  justifyLength,
  isNotOrigin, 
  add} = require("../src/util.js");


describe(" Test generateCartesianProduct",function() {
  it("should return array of cartesian product of two given sets",function() {
    deepEqual(generateCartesianProduct([1],[0]),[[1,0]]);
    deepEqual(generateCartesianProduct([-1],[5]),[[-1,5]]);
    deepEqual(generateCartesianProduct([-1,1],[2,0]),[[-1,2],[-1,0],[1,2],[1,0]]);
  });
});

describe(" Test generateCartesianSquare",function() {
  it("should return array of cartesian product of a given set",function() {
    deepEqual(generateCartesianSquare([1]),[[1,1]]);
    deepEqual(generateCartesianSquare([-2]),[[-2,-2]]);
    deepEqual(generateCartesianSquare([-1,1]),[[-1,-1],[-1,1],[1,-1],[1,1]]);
  });
});

describe(" Test add",function() {
  it("should return array of addition of respective elements of two given arrays",function() {
    deepEqual(add([1,4],[2,3]),[3,7]);
    deepEqual(add([-2,1],[2,3]),[0,4]);
    deepEqual(add([-1,1],[3,4]),[2,5]);
  });
});

describe(" Test isNotOrigin",function() {
  it("should return array not including [0,0] ",function() {
    deepEqual(add([1,4],[2,3]),[3,7]);
    deepEqual(add([-2,1],[2,3]),[0,4]);
    deepEqual(add([-1,1],[3,4]),[2,5]);
  });
});

describe("justifyLength" , function(){
  it("should return justified text " , function(){
    deepEqual(justifyLength("1",3),"1  ");
    deepEqual(justifyLength("14",3),"14 ");
  });
});

