const UnionFind = require("../unionfind"); 

describe("Union-Find tests", function() {
    it("works for edge cases", function() {
        let numberOfNodes = 0;
        let UF;
        expect(function() {
            UF = new UnionFind(numberOfNodes);
        }).toThrowError(/empty set/);
        
        numberOfNodes = 1;
        UF = new UnionFind(numberOfNodes);
        
        expect(UF.find(0, 0)).toEqual(true);
        
        expect(function() {
            UF.find(0, 1);
        }).toThrowError(/invalid node id/);
        
    });
});