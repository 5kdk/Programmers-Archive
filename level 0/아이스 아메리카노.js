// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120819

function solution(money) {
  let answer = [];

  if (money < 5500) {
    return [0, money];
  } else {
    answer.push(Math.floor(money / 5500));
    answer.push(money % 5500);
  }

  return answer;
}
