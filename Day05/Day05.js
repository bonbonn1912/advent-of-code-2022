import { readTXTContent } from "../readFile.js";

let [stack, input] = readTXTContent("input.txt")
  .trimEnd()
  .replace(/[\r]/g, "")
  .split("\n\n");

let towerHeight = stack.split("\n").length - 1;
let towerLines = stack.split("\n").slice(0, -1);

const towerIndex = {
  1: 1,
  5: 2,
  9: 3,
  13: 4,
  17: 5,
  21: 6,
  25: 7,
  29: 8,
  33: 9,
};
let tower = Array.from(Array(9), () => []);
let tower2 = Array.from(Array(9), () => []);

for (let i = 0; i < towerHeight; i++) {
  for (let j = 1; j < towerLines[i].length; j = j + 4) {
    let currentChar = towerLines[i].charAt(j);
    if (/[a-zA-Z]/.test(currentChar)) {
      tower[towerIndex[j] - 1].push(currentChar);
      tower2[towerIndex[j] - 1].push(currentChar);
    }
  }
}

let correctOrder = tower.map((el) => el.reverse());
input.split("\n").map((line) => {
  let command = line.split(" ");
  let move = command[1];
  let from = command[3];
  let to = command[5];

  let crateToBeMoved = correctOrder[from - 1].slice(-move);
  for (let i = 0; i < move; i++) {
    correctOrder[from - 1].pop();
  }
  correctOrder[to - 1].push(...crateToBeMoved.reverse());
});
console.log(tower.map((singleTower) => singleTower.at(-1)));

//The only change to Part 1 is that the spread operator is not reversed.
let correctOrderDay2 = tower2.map((el) => el.reverse());
input.split("\n").map((line) => {
  let command = line.split(" ");
  let move = command[1];
  let from = command[3];
  let to = command[5];

  let crateToBeMoved = correctOrderDay2[from - 1].slice(-move);
  for (let i = 0; i < move; i++) {
    correctOrderDay2[from - 1].pop();
  }
  correctOrderDay2[to - 1].push(...crateToBeMoved);
});
console.log(tower2.map((singleTower) => singleTower.at(-1)));
