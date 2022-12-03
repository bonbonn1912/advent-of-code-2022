import { readTXTContent } from '../readFile.js'

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const dublicates = []
readTXTContent("input.txt").trimEnd().replace(/[\r]/g, "").split("\n").map((line) =>{
    const map = new Map()
    const dublicatesPerLine = []
    let firstHalf = line.substring(0, line.length/2)
    let secondHalf = line.substring(line.length/2)
    firstHalf.split("").forEach(char => map.set(char, char))
    secondHalf.split("").forEach(char =>{
        if(map.has(char)){
            dublicatesPerLine.push(char)
        }
    })
    dublicates.push(...new Set(dublicatesPerLine))
})

console.log(dublicates.map(char => alphabet.indexOf(char)+1).reduce((a,b) => a+b))

let lines = readTXTContent("input.txt").trimEnd().replace(/[\r]/g, "").split('\n')
let sum = 0
for(let i = 0; i < lines.length; i += 3){
    const lineGroup = lines.slice(i, i + 3).map((line) => [...line]);
    let intersection = lineGroup[0];
    for (const sack of lineGroup.slice(1)) {
        intersection = intersection.filter((char) => sack.includes(char));
    }
    sum += alphabet.indexOf(intersection[0]) +1 
}
console.log(sum)