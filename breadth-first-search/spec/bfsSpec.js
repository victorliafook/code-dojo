const BFS = require("../bfs");
const DAG = require("../../graph/digraph.js");

describe("BFS tests", function() {
   it("Handles degenerate cases", function() {
      let graph = new DAG(1);
      
      let traversalArr = [];
      let processVertex = function(vertex) {
         traversalArr.push(vertex);
      };
       
      BFS(graph, 0, processVertex);
      expect(traversalArr.join(',')).toEqual('0');
      
   }); 
});