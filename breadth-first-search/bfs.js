var bfs = function(graph, startVertex, processVertex) {
    processVertex(startVertex);
    
    let current = graph.adjList[startVertex];
    for(let vertex in current) {
        processVertex(vertex);
    }
};

module.exports = bfs;