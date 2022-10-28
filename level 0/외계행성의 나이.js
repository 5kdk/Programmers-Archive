// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120834

function solution(age) {
  const ageArr = String(age).split("");
  const spaceTxt = "abcdefghij";
  let result = "";

  for (let ageEach in ageArr) {
    result += spaceTxt[ageArr[ageEach]];
  }
  return result;
}