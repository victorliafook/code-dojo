const fs = require("fs");
const readline = require("readline");

const args = process.argv.slice(2);
const verticesFile = args[0];

const readFile = readline.createInterface({
  input: fs.createReadStream(verticesFile)
});

var numberOfVertices = 0;
var verticesWeights = [];

var lineNum = 1;
readFile.on("line", (line) => {
  if (lineNum === 1) {
    numberOfVertices = parseInt(line);
  } else {
    let weight = parseInt(line);
    verticesWeights.push(weight);
  }
  
  lineNum++;
}).on("close", () => {
  let memoTable = [0, verticesWeights[0]];
  for (let i = 1; i < verticesWeights.length; i++) {
    memoTable[i + 1] = Math.max(memoTable[i], memoTable[i - 1] + verticesWeights[i]);
  }
  
  //console.log(memoTable);
  let path = reconstructPath(verticesWeights, memoTable);
  //console.log('max:', memoTable[memoTable.length - 1]);
  console.log('path:', path);
  console.log('res:', getTestResult(path));
});

var reconstructPath = (verticesWeights, memoTable) => {
  let memoLength = memoTable.length;
  let pathLength = memoLength - 1;
  
  let pathArr = [];
  let index = pathLength;
  while (index >= 1) {
    let thisScore = memoTable[index - 1];
    let prevScore = memoTable[index];

    if (thisScore >= prevScore) {
      index--;
    } else {
      pathArr[index - 1] = 1;
      index -= 2;
    }
  }

  for (let i = 0; i < pathArr.length; i++) {
    pathArr[i] = pathArr[i] !== undefined ? pathArr[i] : 0;
  }
  
  return pathArr;
};


var getTestResult = (pathArr) => {
  //result set needed for the programming assignment
  let keyIndexes = [1, 2, 3, 4, 17, 117, 517, 997];
  let result = [];
  
  keyIndexes.forEach((index) => {
    let value = pathArr[index - 1] === undefined ? 0 : pathArr[index - 1];
    result.push(value);
  });
  
  return result.join('');
}
