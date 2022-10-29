// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120837

function solution(hp) {
  const antStats = [5, 3, 1];
  let result = 0;

  for (let stat of antStats) {
    let ant = 0;
    if (hp > 0 && stat <= hp) {
      ant += Math.floor(hp / stat);
      hp -= ant * stat;
      result += ant;
    }
  }

  return result;
}
