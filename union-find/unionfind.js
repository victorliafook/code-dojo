class UnionFind {
    constructor(numberOfNodes) {
        if (numberOfNodes < 1) {
            throw new Error("cannot create an empty set");
        }
        
        this.numberOfNodes = numberOfNodes;
        this.sizes = [];
        this.trackNodes = [];
        
        for (let i = 0; i < this.numberOfNodes; i++) {
            this.trackNodes[i] = i;
            this.sizes[i] = 1;
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
        if (this.sizes[rootA] <= this.sizes[rootB]) {
            this.trackNodes[rootA] = rootB;
            this.sizes[rootB] += this.sizes[rootA];
        } else {
            this.trackNodes[rootB] = rootA;
            this.sizes[rootA] += this.sizes[rootB];
        }}
    };
    
    root = (node) => {
        let parent = this.trackNodes[node];
        while (parent !== this.trackNodes[parent]) {
            parent = this.trackNodes[parent];
        }
        
        this.trackNodes[node] = parent;
        return parent;
    };
    
    validateArguments = (nodeA, nodeB) => {
        if (nodeA >= this.numberOfNodes || nodeB >= this.numberOfNodes)
            throw new Error("invalid node id");
    };
}

module.exports = UnionFind;