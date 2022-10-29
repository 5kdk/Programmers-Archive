// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120839

function solution(rsp) {
  let result = "";
  for (let i = 0; i < rsp.length; i++) {
    if (rsp[i] == 0) {
      result += "5";
    } else if (rsp[i] == 2) {
      result += "0";
    } else {
      result += "2";
    }
  }

  return result;
}

/* function solution(rsp) {
  const win = { 0: 5, 2: 0, 5: 2 };
  return [...rsp].map((num) => win[num]).join("");
} */
