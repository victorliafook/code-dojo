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
    
    it("union operation works for edge cases", function() {
        let numberOfNodes = 1;
        let UF = new UnionFind(numberOfNodes);
        
        expect(UF.union(0, 0)).toEqual(undefined);
        
        expect(function() {
            UF.union(0, 1);
        }).toThrowError(/invalid node id/);
        
    });
    
    it("initializes a set of nodes correctly", function() {
        let numberOfNodes = 10;
        let UF = new UnionFind(numberOfNodes);
        
        for (let i = 0; i < numberOfNodes; i++) {
            for (let j = 0; j < numberOfNodes; j++) {
                if (i === j) {
                    expect(UF.find(i, j)).toEqual(true); 
                } else {
                    expect(UF.find(i, j)).toEqual(false);  
                }
            }
        }
    });
    
    it("unites and finds the connections correctly", function() {
        let numberOfNodes = 10;
        let UF = new UnionFind(numberOfNodes);
        
        UF.union(0, 1);
        UF.union(1, 2);
        UF.union(2, 3);
        
        UF.union(4, 5);
        UF.union(4, 6);
        UF.union(4, 7);
        
        UF.union(8, 9);

        expect(UF.find(0, 3)).toEqual(true);
        
        expect(UF.find(4, 7)).toEqual(true);
        
        expect(UF.find(8, 9)).toEqual(true);
        
        expect(UF.find(1, 5)).toEqual(false);
        
        expect(UF.find(1, 9)).toEqual(false);
        
        expect(UF.find(5, 0)).toEqual(false);
        
        expect(UF.find(5, 8)).toEqual(false);
    });
});