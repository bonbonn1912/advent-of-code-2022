
import { readTXTContent } from '../readFile.js';
let input = readTXTContent("input.txt").trimEnd().replace(/[\r]/g, "")

let regex = /(.).*\1/;

for(let DAY = 1; DAY < 3; DAY++){
    let dayFactor = DAY == 1 ? 4 : 14
    for (let i = 0; i < input.length; i++) {
        if (!regex.test(input.substring(i, i + dayFactor))) {
          console.log(i + dayFactor);
          break;
        }
      }
}
