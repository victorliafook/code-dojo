var bfs = function(graph, startVertex, processVertex) {
    let queue = [];
    let visited = {};
    
    queue.push(startVertex);
    
    while (queue.length > 0) {
        let current = queue.shift();
        visited[current] = true;
        processVertex(current);
    
        let adjVertices = graph.adjList[current];
        adjVertices.forEach((vertex) => {
            if (visited[vertex] === undefined) {
                queue.push(vertex);
            }
        });
    }
};

module.exports = bfs;