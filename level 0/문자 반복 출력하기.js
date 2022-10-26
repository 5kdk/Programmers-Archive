// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120825

function solution(my_string, n) {
  let result = "";
  for (let str of my_string) {
    for (let i = 1; i <= n; i++) {
      result += str;
    }
  }
  return result;
}
