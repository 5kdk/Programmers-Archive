// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120813

function solution(n) {
  let answer = [];
  let odd = 1;

  while (odd <= n) {
    answer.push(odd);
    odd = odd + 2;
  }

  return answer;
}