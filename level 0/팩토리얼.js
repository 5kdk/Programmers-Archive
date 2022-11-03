// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120848

function solution(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;

    if (result === n) {
      return i;
    }

    if (result > n) {
      return i - 1;
    }
  }
}

/* 
function solution(n) {
  let factorial = [1, 1];
  for (let i = 2; n > factorial[i - 1]; i++) factorial[i] = factorial[i - 1] * i;
  return factorial[factorial.length - 1] === n ? factorial.length - 1 : factorial.length - 2;
}
*/

/*
function solution(n) {
  let i = 1;
  let f = 1;
  while (f * i < n) f *= ++i;
  return i;
}
*/