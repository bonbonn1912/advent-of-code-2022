import { readTXTContent } from "../readFile.js";

let output = 0;
readTXTContent("testinput.txt")
  .trimEnd()
  .replace(/[\r]/g, "")
  .split("\n")
  .map((line) => {
    let [left, right] = line.split(',');
    let [leftStart, leftEnd] = left.split('-').map(Number);
    let [rightStart, rightEnd] = right.split('-').map(Number);

    if (leftEnd - leftStart > rightEnd - rightStart) {
        if (+leftStart <= rightStart && leftEnd >= rightEnd) {
            output++;
        }
    } else if (rightStart <= leftStart && rightEnd >= leftEnd) {
        output++;
    } else {
    }
  });

  let outputDay02 = 0;
  readTXTContent("input.txt")
  .trimEnd()
  .replace(/[\r]/g, "")
  .split("\n")
  .map((line) => {
    let [leftRange, rightRange] = line.split(',');
    let [leftStart, leftEnd] = leftRange.split('-').map(Number);
    let [rightStart, rightEnd] = rightRange.split('-').map(Number);

    if(!(leftStart > rightEnd || rightStart > leftEnd)) {
        outputDay02++;
    }
  });


console.log(outputDay02)
