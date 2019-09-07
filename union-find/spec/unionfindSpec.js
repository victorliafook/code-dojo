const UnionFind = require("../unionfind"); 

describe("Union-Find tests", function() {
    it("works for edge cases", function() {
        let numberOfNodes = 0;
        let UF = new UnionFind(numberOfNodes);
        
        numberOfNodes = 1;
        UF = new UnionFind(numberOfNodes);
    });
});