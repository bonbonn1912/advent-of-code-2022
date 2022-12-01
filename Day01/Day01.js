import { readTXTContent } from "../readFile.js";

function day01_part1() {
  let content = readTXTContent("input.txt").replace(/[\r]/g, "");
  let contentAsArray = content.split("\n");
  let currentRecord = 0;
  let currStreak = 0;
  contentAsArray.map((el) =>
    el == ""
      ? currStreak > currentRecord
        ? ((currentRecord = currStreak), (currStreak = 0))
        : (currStreak = 0)
      : (currStreak += parseInt(el))
  );
  console.log(currentRecord);
}

function day01_part2() {
  let content = readTXTContent("input.txt").replace(/[\r]/g, "");
  let contentAsArray = content.split("\n");
  let currentRecord = 0;
  let currStreak = 0;
  let groupedCaloried = [];
  contentAsArray.map((el) => {
    if (el == "") {
      if (currStreak > currentRecord) {
        currentRecord = currStreak;
      }
      groupedCaloried.push(currStreak);
      currStreak = 0;
    } else {
      currStreak += parseInt(el);
    }
  });
  console.log(
    groupedCaloried
      .sort((a, b) => a - b)
      .slice(-3)
      .reduce((partialSum, a) => partialSum + a, 0)
  );
}
day01_part1();
day01_part2();
