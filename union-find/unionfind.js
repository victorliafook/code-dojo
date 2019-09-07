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
        
        return this.root(nodeA) === this.root(nodeB);
    };
    
    union = (nodeA, nodeB) => {
        this.validateArguments(nodeA, nodeB);
        
        let rootA = this.root(nodeA);
        let rootB = this.root(nodeB);
        
        this.trackNodes[rootA] = rootB;
    };
    
    root = (node) => {
        while (this.trackNodes[node] !== node) {
            node = this.trackNodes[node];
        }
        
        return node;
    };
    
    validateArguments = (nodeA, nodeB) => {
        if (nodeA >= this.numberOfNodes || nodeB >= this.numberOfNodes)
            throw new Error("invalid node id");
    };
}

module.exports = UnionFind;