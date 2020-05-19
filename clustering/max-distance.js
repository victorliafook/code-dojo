const fs = require("fs");
const readline = require("readline");
const UnionFind = require("../union-find/unionfind");

const args = process.argv.slice(2);
const edgesFile = args[0];

const readFile = readline.createInterface({
  input: fs.createReadStream(edgesFile)
});

var vertices = 0;
var targetClustersNum = 4;
var edgesList = [];
var UF;

var lineNum = 1;
readFile.on("line", (line) => {
  if (lineNum === 1) {
    vertices = parseInt(line);
    /* instantiate it with one extra slot, as it starts from 0 but vertices start
    ** from 1 and I dont want to play with index offsets */
    UF = new UnionFind(vertices + 1);
  } else {
    let edge = parseEdgeFromFileLine(line);
    edgesList.push(edge);
  }
  
  lineNum++;
}).on("close", () => {
  edgesList.sort(sortByWeight);

  let clusters = vertices;
  let currentEdge;
  while (clusters >= targetClustersNum) {
    currentEdge = edgesList.shift();
    if (UF.find(currentEdge.from, currentEdge.to) === false) {
      UF.union(currentEdge.from, currentEdge.to);
      clusters--;
    }
  }
  
  console.log(currentEdge.weight);
});

var parseEdgeFromFileLine = (line) => {
  let lineSplit = line.split(" ");
  let edge = {
    from: parseInt(lineSplit[0]), 
    to: parseInt(lineSplit[1]),
    weight: parseInt(lineSplit[2])
  };
  
  return edge;
};

var sortByWeight = (edge1, edge2) => {
  //sort in ascending order:
  return edge1.weight - edge2.weight;
};