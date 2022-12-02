import { readTXTContent } from "../readFile.js";
console.log(
  readTXTContent("input.txt")
    .replace(/[\r]/g, "")
    .split("\n\n")
    .map((line) => line.split("\n").reduce((a, b) => parseInt(a) + parseInt(b)))
    .sort((a, b) => a - b)
    .slice(-1)[0]
);
console.log(
  readTXTContent("input.txt")
    .replace(/[\r]/g, "")
    .split("\n\n")
    .map((line) => line.split("\n").reduce((a, b) => parseInt(a) + parseInt(b)))
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((a, b) => parseInt(a) + parseInt(b))
);
