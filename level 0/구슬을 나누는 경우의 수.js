// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120840

function solution(balls, share) {
  let nm = balls - share;

  function factorial(n) {
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) result *= BigInt(i);
    return result;
  }

  return factorial(balls) / (factorial(nm) * factorial(share));
}

// bigInt 사용하지 않을시 큰 정수를 감당하지 못함