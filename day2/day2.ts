const input = await Deno.readTextFile("day2.txt");

const directions = input.split("\n");
let depth = 0;
let distance = 0;
let depth2 = 0;
let distance2 = 0;
let aim = 0;
for (const d in directions) {
  const direction = directions[d].split(" ");
  if (direction[0] == "down") {
    depth += Number(direction[1]);
    aim += Number(direction[1]);
  }
  if (direction[0] == "up") {
    depth -= Number(direction[1]);
    aim -= Number(direction[1]);
  }
  if (direction[0] == "forward") {
    distance += Number(direction[1]);
    distance2 += Number(direction[1]);
    if (Number(direction[1]) != 0) {
      depth2 += aim * Number(direction[1]);
    }
  }
}

console.log("Part1:", depth * distance, "Part2:", depth2 * distance2);
