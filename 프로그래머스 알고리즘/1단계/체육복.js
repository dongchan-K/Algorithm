function solution(n, lost, reserve) {
  let answer = 0;
  // 모든 학생의 체육복 갯수를 1로 설정
  let trainingSuit = Array.from({ length: n }, () => 1);

  // 체육복을 도난당한 학생의 체육복 갯수를 0으로 변경
  for (let i = 0; i < lost.length; i++) {
    trainingSuit[lost[i] - 1] = 0;
  }

  // 여벌이 있는 학생의 체육복 갯수를 +1 -> 도난 당하고 여벌이 있을 시 1개이기 때문
  for (let j = 0; j < reserve.length; j++) {
    trainingSuit[reserve[j] - 1] += 1;
  }

  // 체육복 빌리기
  for (let k = 0; k < n; k++) {
    // 앞 학생에게 빌리는 경우
    if (trainingSuit[k] === 0 && trainingSuit[k - 1] === 2) {
      trainingSuit[k] = 1;
      trainingSuit[k - 1] = 1;
    }
    // 뒤 학생에게 빌리는 경우
    else if (trainingSuit[k] === 0 && trainingSuit[k + 1] === 2) {
      trainingSuit[k] = 1;
      trainingSuit[k + 1] = 1;
    }
  }

  // 수업을 들을 수 있는 학생의 수
  for (const x of trainingSuit) {
    if (x > 0) answer++;
  }

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
