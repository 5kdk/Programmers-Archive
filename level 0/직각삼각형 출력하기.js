// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120823

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const num = Number(input[0]);
  let logStr = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      logStr += "*";
    }
    logStr += "\n";
  }
  console.log(logStr);
});


/* const n = Number(input[0]);

let line = 1;
while (line <= n) {
  
  let starStr = "";
  let cnt = 0;
  while (cnt < line) {
    starStr += "*";
    cnt += 1;
  }

  console.log(starStr);
  line += 1;
} */