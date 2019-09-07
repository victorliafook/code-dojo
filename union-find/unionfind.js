class UnionFind {
    constructor(numberOfNodes) {
        if (numberOfNodes < 1) {
            throw new Error("cannot create an empty set");
        }
        
        this.numberOfNodes = numberOfNodes;
    }
    
    find = (nodeA, nodeB) => {
        this.validateArguments(nodeA, nodeB);
        
        return true
    };
    
    union = (nodeA, nodeB) => {
        this.validateArguments(nodeA, nodeB);
    };
    
    validateArguments = (nodeA, nodeB) => {
        if (nodeA >= this.numberOfNodes || nodeB >= this.numberOfNodes)
            throw new Error("invalid node id");
    };
}

module.exports = UnionFind;