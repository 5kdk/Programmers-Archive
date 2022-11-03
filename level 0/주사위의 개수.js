// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120845#qna

function solution(box, n) {
  return Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
}


// const solution = (box, n) => box.map(a => a/n<<0).reduce((a,b) => a*b,1)