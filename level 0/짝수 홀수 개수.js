// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
  let EvenCnt = 0;
  let oddCnt = 0;
  for (num of num_list) {
    if (num % 2 === 0) {
      EvenCnt += 1;
    } else {
      oddCnt += 1;
    }
  }
  return [EvenCnt, oddCnt];
}