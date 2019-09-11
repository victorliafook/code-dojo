const BFS = require("../bfs");
const Digraph = require("../../graph/digraph.js");

describe("BFS tests", function() {
   it("Handles degenerate cases: 1 element", function() {
      let graph = new Digraph(1);
      
      let traversalArr = [];
      let processVertex = function(vertex) {
         traversalArr.push(vertex);
      };
       
      BFS(graph, 0, processVertex);
      expect(traversalArr.join(',')).toEqual('0');
      
   });
   
   it("Handles degenerate cases: 2 elements, no edge", function() {
      let graph = new Digraph(2);
      
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
      let graph = new Digraph(2);
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
   
   it("Traverses Breadth-First correctly", function() {
      let graph = new Digraph(5);
      graph.addEdge(0, 1);
      graph.addEdge(0, 2); 
      graph.addEdge(0, 3); 
      graph.addEdge(2, 4);
      
      let traversalArr = [];
      let processVertex = function(vertex) {
         traversalArr.push(vertex);
      };
      
      BFS(graph, 0, processVertex);
      expect(traversalArr.join(',')).toEqual('0,1,2,3,4');
      
      traversalArr = [];
      BFS(graph, 1, processVertex);
      expect(traversalArr.join(',')).toEqual('1');
      
      traversalArr = [];
      BFS(graph, 2, processVertex);
      expect(traversalArr.join(',')).toEqual('2,4');
      
      traversalArr = [];
      BFS(graph, 3, processVertex);
      expect(traversalArr.join(',')).toEqual('3');
      
      graph = new Digraph(10);
      graph.addEdge(0, 1);
      graph.addEdge(0, 2); 
      graph.addEdge(2, 3); 
      graph.addEdge(2, 4);
      graph.addEdge(2, 5);
      graph.addEdge(5, 6);
      graph.addEdge(5, 8);
      graph.addEdge(8, 9);
      graph.addEdge(0, 9);
      graph.addEdge(5, 7);
       
      traversalArr = [];
      BFS(graph, 0, processVertex);
      expect(traversalArr.join(',')).toEqual('0,1,2,9,3,4,5,6,8,7');
   });
   
   it("Handles cycles", function() {
      let graph = new Digraph(4);
      graph.addEdge(0, 1);
      graph.addEdge(0, 2); 
      graph.addEdge(1, 2);
      graph.addEdge(2, 0);
      graph.addEdge(2, 3);
      graph.addEdge(3, 3);
      
      let traversalArr = [];
         let processVertex = function(vertex) {
         traversalArr.push(vertex);
      };
      
      BFS(graph, 2, processVertex);
      expect(traversalArr.join(',')).toEqual('2,0,3,1');
   });
});