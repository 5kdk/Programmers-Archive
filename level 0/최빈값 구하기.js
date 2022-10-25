// 문제 url
// https://school.programmers.co.kr/learn/courses/30/lessons/120812

function solution(array) {
  let m = new Map();
  for (let n of array) m.set(n, (m.get(n) || 0) + 1);
  m = [...m].sort((a, b) => b[1] - a[1]);
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}

// 내가 작성한 코드는 너무 복잡해짐, 임시로 모범코드 아카이빙.. 공부좀더하고 다시 풀자