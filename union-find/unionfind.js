class UnionFind {
    constructor(numberOfNodes) {
        if (numberOfNodes < 1) {
            throw new Error("cannot create an empty set");
        }
        
        this.numberOfNodes = numberOfNodes;
        this.trackNodes = [];
        
        for (let i = 0; i < this.numberOfNodes; i++) {
            this.trackNodes[i] = i;
        }
    }
    
    find = (nodeA, nodeB) => {
        this.validateArguments(nodeA, nodeB);
        
        return this.trackNodes[nodeA] === this.trackNodes[nodeB];
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