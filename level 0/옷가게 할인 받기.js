// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120818

function solution(price) {
  let newPrice = 0;

  if (price >= 500000) {
    newPrice = Math.floor(price * 0.8);
    return newPrice;
  } else if (price >= 300000) {
    newPrice = Math.floor(price * 0.9);
    return newPrice;
  } else if (price >= 100000) {
    newPrice = Math.floor(price * 0.95);
    return newPrice;
  } else {
    return price;
  }
}
