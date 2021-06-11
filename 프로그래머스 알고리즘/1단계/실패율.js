function solution(N, stages) {
  let answer = [];

  // 성공한 사용자와 도전중인 사용자를 구한 후 실패율을 계산
  for (let i = 1; i <= N; i++) {
    let clear = 0; // 스테이지 클리어에 성공한 사용자
    let challenge = 0; // 스테이지에 도전중인 사용자
    for (let j = 0; j < stages.length; j++) {
      if (i < stages[j]) clear++;
      if (i === stages[j]) challenge++;
    }
    // 스테이지 번호와 실패율을 객체 형태로 배열에 저장
    answer.push({ stage: i, result: challenge / clear });
  }
  // 실패율에 따라 내림차순 정렬 후 stage 번호로 값을 변경
  return answer.sort((a, b) => b.result - a.result).map(v => v.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3, 4, 2, 1, 5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4, 2, 1, 3]
