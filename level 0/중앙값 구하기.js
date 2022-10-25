// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(array) {
  let new_array = array.sort(function compare(a, b) {
    return a - b;
  });

  let answer = new_array[Math.floor(new_array.length / 2)];
  return answer;
}
