// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120847

function solution(numbers) {
  numbers.sort((a, b) => b - a);
  
  return numbers[0] * numbers[1];
}
