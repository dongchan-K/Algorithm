function solution(test) {
  let answer = 0;
  const testCount = test.length; // 시험 횟수
  const student = test[0].length; // 학생 수

  // 1번 학생부터 4번 학생까지 멘토, 멘티 경우의 수 4 x 4
  for (let i = 1; i <= student; i++) {
    for (let j = 1; j <= student; j++) {
      let count = 0;
      for (let k = 0; k < testCount; k++) {
        let pi = 0; // i 학생 등수
        let pj = 0; // j 학생 등수
        for (let s = 0; s < student; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) count++;
      }
      if (count === testCount) answer++;
    }
  }

  return answer;
}

const arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(arr));
