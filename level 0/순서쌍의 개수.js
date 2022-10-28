// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120836

// 두 숫자의 곱인 순서쌍은 약수의 수와 같음

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer++;
  }
  return answer;
}
