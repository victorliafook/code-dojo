const fs = require("fs");
const readline = require("readline");
const MinPQ = require("../priority-queue/min-pq");

const args = process.argv.slice(2);
const edgesFile = args[0];

const readFile = readline.createInterface({
  input: fs.createReadStream(edgesFile)
});

var numberOfSymbols = 0;
var minQueue;

var lineNum = 1;
readFile.on("line", (line) => {
  if (lineNum === 1) {
    numberOfSymbols = parseInt(line);
    minQueue = new MinPQ();
  } else {
    let symbolNode = parseSymbolNodeFromLine(line);
    minQueue.insert(symbolNode);
  }
  
  lineNum++;
}).on("close", () => {
  while (minQueue.size() > 1) {
    let small = minQueue.remove();  
    let big = minQueue.remove();
    
    let weightSum = small.key + big.key;
    let nodeHeight = Math.max(small.height, big.height) + 1;
    let newNode = getSymbolNode(weightSum, nodeHeight, small, big);
    
    minQueue.insert(newNode);
  }
  
  let tree = minQueue.remove();
  //console.log(tree);
  console.log('max:', tree.height);
  console.log('min:', getMinDepth(tree));
});

var parseSymbolNodeFromLine = (line) => {
  let weight = parseInt(line);
  let pqNode = getSymbolNode(weight, 0, null, null);
  
  return pqNode;
};

var getSymbolNode = (weight, height, left, right) => {
  let node = {
    key: weight,
    height: height,
    left: left,
    right: right
  };
  
  return node;
};

var getMinDepth = (node) => {
  let depth = 0;
  while (node.left !== null && node.right !== null) {
    node = node.left.height <= node.right.height ? node.left : node.right;
    depth++;
  }
  
  return depth;
}