// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120842

function solution(num_list, n) {
  let result = [];
  const numsLength = num_list.length;

  for (let i = 0; i < numsLength / n; i++) {
    result[i] = [];
    for (let j = 0; j < n; j++) {
      result[i][j] = num_list.shift();
    }
  }

  return result;
}



/* function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
} */