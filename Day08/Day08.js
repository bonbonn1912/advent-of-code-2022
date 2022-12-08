import { readTXTContent } from "../readFile.js";

let rows = readTXTContent("input.txt")
  .trimEnd()
  .replace(/[\r]/g, "")
  .split("\n")
  .map((line) => line.split("").map(Number));
const cols = rows.map((x) => []);
for (const i in rows) {
  for (const j in rows[i]) {
    cols[j].push(rows[i][j]);
  }
}
const width = rows[0].length;
const height = rows.length;
let bestScenicScore = 0;
let bssPos = [-1, -1];
let v = 2 * width + 2 * (height - 2);
for (let r = 1; r < height - 1; r++) {
  for (let c = 1; c < width - 1; c++) {
    const val = rows[r][c];
    const views = [
      rows[r]
        .slice(0, c)
        .reverse()
        .findIndex((x) => x >= val),
      rows[r].findIndex((x, i) => i > c && x >= val), 
      cols[c]
        .slice(0, r)
        .reverse()
        .findIndex((x) => x >= val), // up
      cols[c].findIndex((x, i) => i > r && x >= val),
    ]; 
    if (views.findIndex((i) => i == -1) >= 0) {
      v += 1;
    }
    const scores = views.map((x, i) => {
      switch (i) {
        case 0:
          return x == -1 ? c : x + 1;
        case 1:
          return x == -1 ? width - 1 - c : x - c;
        case 2:
          return x == -1 ? r : x + 1;
        case 3:
          return x == -1 ? height - 1 - r : x - r;
      }
    });
    const scenicScore = scores.reduce((a, b) => a * b);
    if (scenicScore > bestScenicScore) {
      bestScenicScore = scenicScore;
      bssPos = [r, c];
    }
  }
}
console.log(v);
console.log(bestScenicScore);
