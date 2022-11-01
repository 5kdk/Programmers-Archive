// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120843


function solution(numbers, k) {
  let index = 0;

  for (let i = 0; i < k - 1; i++) {
    index += 2;
    if (index >= numbers.length) {
      index -= numbers.length;
    }
  }
  return numbers[index];
}

/* function solution(numbers, k) {
  k = (2 * (k - 1)) % numbers.length;
  return numbers[k];
} */