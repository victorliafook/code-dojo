class DAG {
    constructor(nOfVertices) {
        this.nOfvertices = nOfVertices;
        this.adjList = [];
    }
    
    addEdge = (a, b) => {
        this.validateVertex(a);
        this.validateVertex(b);
        if (this.adjList[a] === undefined) {
            this.adjList[a] = {};
        }
        
        this.adjList[a][b] = 1;
    };
    
    validateVertex = (vertex) => {
        if (vertex < 0 || vertex >= nOfVertices) {
            throw new Erro("Invalid vertex");
        }  
    };
}

module.exports = DAG;