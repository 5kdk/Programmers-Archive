// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
  let sub = 0;

  for (let num of numbers) {
    sub += num;
  }

  return sub / numbers.length;
}
