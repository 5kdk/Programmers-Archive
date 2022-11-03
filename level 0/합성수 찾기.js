// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120846#qna

function solution(n) {
  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return true;
    }
    return false;
  };

  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) count += 1;
  }

  return count;
}