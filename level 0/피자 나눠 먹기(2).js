// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120815

function solution(n) {
  let pizza = 1;

  while (pizza < 100) {
    if ((6 * pizza) % n === 0) {
      return pizza;
    } else {
      pizza += 1;
    }
  }
  return pizza;
}