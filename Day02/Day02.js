import { readTXTContent } from "../readFile.js";

const Scores = {
  X: 1,
  Y: 2,
  Z: 3,
};

function calcScore(line) {
  let firstChar = line.split(" ")[0];
  let secondChar = line.split(" ")[1];
  let score = 0;
  switch (firstChar) {
    case "A":
      secondChar == "X"
        ? (score = score + 3 + Scores[secondChar])
        : secondChar == "Y"
        ? (score = score + 6 + Scores[secondChar])
        : (score = score + 0 + Scores[secondChar]);
      break;
    case "B":
      secondChar == "Y"
        ? (score = score + 3 + Scores[secondChar])
        : secondChar == "Z"
        ? (score = score + 6 + Scores[secondChar])
        : (score = score + 0 + Scores[secondChar]);
      break;
    case "C":
      secondChar == "Z"
        ? (score = score + 3 + Scores[secondChar])
        : secondChar == "X"
        ? (score = score + 6 + Scores[secondChar])
        : (score = score + 0 + Scores[secondChar]);
  }
  return score;
}

let scoreDay01 = 0;
readTXTContent("input.txt")
  .replace(/[\r]/g, "")
  .split("\n")
  .map((line) => {
    scoreDay01 = scoreDay01 + calcScore(line);
  });
console.log(scoreDay01);

let scoreDay02 = 0;
readTXTContent("input.txt")
  .replace(/[\r]/g, "")
  .split("\n")
  .map((line) => {
    let firstChar = line.split(" ")[0];
    let secondChar = line.split(" ")[1];
    let newLine = "";
    switch (secondChar) {
      case "Y":
        firstChar == "A"
          ? (newLine = line.replace(secondChar, "X"))
          : firstChar == "B"
          ? (newLine = line.replace(secondChar, "Y"))
          : (newLine = line.replace(secondChar, "Z"));
        break;
      case "X":
        firstChar == "A"
          ? (newLine = line.replace(secondChar, "Z"))
          : firstChar == "B"
          ? (newLine = line.replace(secondChar, "X"))
          : (newLine = line.replace(secondChar, "Y"));
        break;
      case "Z":
        firstChar == "A"
          ? (newLine = line.replace(secondChar, "Y"))
          : firstChar == "B"
          ? (newLine = line.replace(secondChar, "Z"))
          : (newLine = line.replace(secondChar, "X"));
    }
    scoreDay02 = scoreDay02 + calcScore(newLine);
  });
console.log(scoreDay02);
