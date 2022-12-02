import { readTXTContent } from "../readFile.js";
const lineScore = {
  "A X": 4, // Rock Paper Scissors
  "A Y": 8,
  "A Z": 3,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 7,
  "C Y": 2,
  "C Z": 6,
};
const conditions = {
  "A X": "A Z", // Rock Paper Scissors
  "A Y": "A X",
  "A Z": "A Y",
  "B X": "B X",
  "B Y": "B Y",
  "B Z": "B Z",
  "C X": "C Y",
  "C Y": "C Z",
  "C Z": "C X",
};

console.log(readTXTContent("input.txt").replace(/[\r]/g, "").split("\n").map(line => lineScore[line]).reduce((a,b) => a+b))

console.log(readTXTContent("input.txt").replace(/[\r]/g, "").split("\n").map(line => conditions[line]).map((newline) => lineScore[newline]).reduce((a,b) => a+b))

