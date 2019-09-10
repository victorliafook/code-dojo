const BFS = require("../bfs");
const DAG = require("../../graph/digraph.js");

describe("BFS tests", function() {
   it("Handles degenerate cases: 1 element", function() {
      let graph = new DAG(1);
      
      let traversalArr = [];
      let processVertex = function(vertex) {
         traversalArr.push(vertex);
      };
       
      BFS(graph, 0, processVertex);
      expect(traversalArr.join(',')).toEqual('0');
      
   });
   
   it("Handles degenerate cases: 2 elements, no edge", function() {
      let graph = new DAG(2);
      
      let traversalArr = [];
      let processVertex = function(vertex) {
         traversalArr.push(vertex);
      };
       
      BFS(graph, 0, processVertex);
      expect(traversalArr.join(',')).toEqual('0');
      
      traversalArr = [];
      BFS(graph, 1, processVertex);
      expect(traversalArr.join(',')).toEqual('1');
   });
   
   it("Handles degenerate cases: 2 elements, 1 edge", function() {
      let graph = new DAG(2);
      graph.addEdge(0, 1);
      
      let traversalArr = [];
      let processVertex = function(vertex) {
         traversalArr.push(vertex);
      };
       
      BFS(graph, 0, processVertex);
      expect(traversalArr.join(',')).toEqual('0,1');
      
      traversalArr = [];
      BFS(graph, 1, processVertex);
      expect(traversalArr.join(',')).toEqual('1');
   }); 
});