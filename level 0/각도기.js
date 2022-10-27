// 문제 URL
// https://school.programmers.co.kr/learn/courses/30/lessons/120829

function solution(angle) {
  if (angle === 180) {
    return 4;
  } else if (angle === 90) {
    return 2;
  } else if (90 < angle && angle < 180) {
    return 3;
  } else if (0 < angle && angle < 90) {
    return 1;
  }
}

/* function solution(angle) {
  return angle < 90 ? 1 : angle == 90 ? 2 : angle < 180 ? 3 : 4;
} */
