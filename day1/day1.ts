const input = await Deno.readTextFile("day1.txt");
const depths = input.split("\n");
let count = 1;
let count2 = 0;
for (let i = 0; i < depths.length; i++) {
  if (depths[i] < depths[i + 1]) {
    count++;
  }
  const window1 = Number(depths[i]) + Number(depths[i + 1]) +
    Number(depths[i + 2]);
  const window2 = Number(depths[i + 1]) + Number(depths[i + 2]) +
    Number(depths[i + 3]);
  if (window1 < window2) {
    count2++;
  }
}
console.log("Part1:", count, "Part2:", count2);
