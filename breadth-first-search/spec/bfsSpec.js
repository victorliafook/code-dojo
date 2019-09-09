const BFS = require("../bfs");
const DAG = require("../../graph/digraph.js");

describe("BFS tests", function() {
   it("Handles degenerate cases", function() {
       let graph = new DAG(1);
       graph.addEdge(1, 2);
   }); 
});