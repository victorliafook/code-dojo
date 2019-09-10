var bfs = function(graph, startVertex, processVertex) {
    let queue = [];
    let visited = {};
    
    queue.push(startVertex);
    
    while(queue.length > 0) {
        let current = queue.shift();
        processVertex(current);
    
        let adjVertices = graph.adjList[current];
        for(let vertex in adjVertices) {
            queue.push(vertex);
        }
    }

};

module.exports = bfs;