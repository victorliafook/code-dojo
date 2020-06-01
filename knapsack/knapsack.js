const fs = require("fs");
const readline = require("readline");

const args = process.argv.slice(2);
const verticesFile = args[0];

const readFile = readline.createInterface({
  input: fs.createReadStream(verticesFile)
});

var capacity = 0;
var nOfItems = 0;
var values = [];
var weights = [];

var lineNum = 1;
readFile.on("line", (line) => {
  if (lineNum === 1) {
    let lineInput = line.split(" ");
    capacity = parseInt(lineInput[0]);
    nOfItems = parseInt(lineInput[1]);
  } else {
    let lineInput = line.split(" ");
    values.push(parseInt(lineInput[0]));
    weights.push(parseInt(lineInput[1]));
  }
  
  lineNum++;
}).on("close", () => {
  let memo = {};
  let maxProfit = knapsackRecursive(values, weights, memo, 0, capacity);

  console.log(maxProfit);
});


var knapsackRecursive = (values, weights, memo, index, remainingCapacity) => {
  if (index === values.length) return 0;
  
  if (memo[remainingCapacity] === undefined || memo[remainingCapacity][index] === undefined) {
    let thisWeight = weights[index];
    let thisValue = values[index];
    
    let pick = 0;
    let dontPick = knapsackRecursive(values, weights, memo, index + 1, remainingCapacity);
    
    if (remainingCapacity - thisWeight >= 0) {
      pick = thisValue + knapsackRecursive(values, weights, memo, index + 1, remainingCapacity - thisWeight);  
    }
    
    memo[remainingCapacity] = memo[remainingCapacity] || {};
    memo[remainingCapacity][index] = Math.max(pick, dontPick);
  } 
  
  return memo[remainingCapacity][index];
};



