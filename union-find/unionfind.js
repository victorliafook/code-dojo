class UnionFind {
    constructor(numberOfNodes) {
        if (numberOfNodes < 1) {
            throw new Error("cannot create an empty set");
        }
        
        this.numberOfNodes = numberOfNodes;
    }
    
    find = (nodeA, nodeB) => {
        if (nodeA >= this.numberOfNodes || nodeB >= this.numberOfNodes)
            throw new Error("invalid node id");
        
        return true
    };
}

module.exports = UnionFind;