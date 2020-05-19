const fs = require("fs");
const readline = require("readline");
const UnionFind = require("../union-find/unionfind");

const args = process.argv.slice(2);
const verticesFile = args[0];

const readFile = readline.createInterface({
  input: fs.createReadStream(verticesFile)
});

var lineNum = 1;
var vertexIndex = 0;
var vertices = 0;
var verticeHash = {};
var verticesList = [];
var UF;

readFile.on("line", (line) => {
  if (lineNum === 1) {
    let fileHeader = parseHeaderFromFileLine(line);
    vertices = fileHeader.vertices;
    
    UF = new UnionFind(vertices);
  } else {
    let vertex = parseVertexFromFileLine(line);
    verticesList.push(vertex);
    
    verticeHash[vertex] = verticeHash[vertex] || [];
    verticeHash[vertex].push(vertexIndex);
    vertexIndex++;
  }
  
  lineNum++;
}).on("close", () => {
  let clusters = vertices;
  let currentVertex;

  for (let index = 0; index < vertices; index++) {
    currentVertex = verticesList[index];
    var possibleNeighbours = getPossibleNeighbours(currentVertex, verticeHash);
    
    possibleNeighbours.forEach(possibleNeighbour => {
      let neighbourIndexes = verticeHash[possibleNeighbour];
      
      neighbourIndexes.forEach(neighbourIndex => {
        if (UF.find(index, neighbourIndex) === false) {
          UF.union(index, neighbourIndex);
          clusters--;
        }
      });
    });
  }

  console.log(clusters);
});

var getPossibleNeighbours = (vertex, hash) => {
  let bitArray = vertex.split("");
  let possibleNeighbours = [vertex];
  
  for (let i = 0; i < vertex.length; i++) {
    bitArray[i] = flipBit(bitArray[i]);
    let candidate = bitArray.join("");
    if (hash[candidate] !== undefined)
      possibleNeighbours.push(candidate);
    bitArray[i] = flipBit(bitArray[i]);
  }
  
  for (let i = 0; i < vertex.length; i++) {
    bitArray[i] = flipBit(bitArray[i]);
    for (let j = i + 1; j < vertex.length; j++) {
      bitArray[j] = flipBit(bitArray[j]);
      
      let candidate = bitArray.join("");
      if (hash[candidate] !== undefined)
        possibleNeighbours.push(candidate);
      bitArray[j] = flipBit(bitArray[j]);
    }
    
    bitArray[i] = flipBit(bitArray[i]);
  }
  
  return possibleNeighbours;
};

var parseHeaderFromFileLine = (line) => {
  let lineSplit = line.split(" ");
  let header = {
    vertices: parseInt(lineSplit[0]), 
    bits: parseInt(lineSplit[1])
  };
  
  return header;
};

var parseVertexFromFileLine = (line) => {
  let vertex = line.replace(/\s/g, "");
    
  return vertex;
};

var flipBit = (bit) => {
  if (bit === "0") {
    return "1";
  }
  
  return "0";
}