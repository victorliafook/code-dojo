const UnionFind = require("../unionfind"); 

describe("Union-Find tests", function() {
    if("throws exception for an empty set", function() {
        let numberOfNodes = 0;
        let UF;
        expect(function() {
            UF = new UnionFind(numberOfNodes);
        }).toThrowError(/empty set/);
    });
    
    it("find operation works for edge cases", function() {
        let numberOfNodes = 1;
        let UF = new UnionFind(numberOfNodes);
        
        expect(UF.find(0, 0)).toEqual(true);
        
        expect(function() {
            UF.find(0, 1);
        }).toThrowError(/invalid node id/);
        
    });
});