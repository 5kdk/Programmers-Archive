// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120835

// Spread Operator 전개연산자로 깊은복사, for of 문과 indexOf 활용

function solution(emergency) {
  let result = [];
  let eSorted = [...emergency].sort((a, b) => b - a);

  for (const e of emergency) {
    result.push(eSorted.indexOf(e) + 1);
  }

  return result;
}

