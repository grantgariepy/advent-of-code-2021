const input = await Deno.readTextFile("day3.txt");

const lines = input.split("\n");

// console.log(lines);
const gammaArray = [];
const epsilonArray = [];
for (let i = 0; i < lines[i].length; i++) {
  const mapLines = lines.map((line) => {
    return line[i];
  });
  const result: string = mapLines.reduce(
    (acc: any, curr: any) => (acc[curr] = (acc[curr] || 0) + 1, acc),
    {},
  );
  if (Number(result["1"]) > Number(result["0"])) {
    gammaArray.push(1);
    epsilonArray.push(0);
  } else {
    gammaArray.push(0);
    epsilonArray.push(1);
  }
}
const gamma = parseInt(gammaArray.join(""), 2);
const epsilon = parseInt(epsilonArray.join(""), 2);

console.log(gamma * epsilon);
