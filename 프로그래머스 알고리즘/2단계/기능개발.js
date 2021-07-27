function solution(progresses, speeds) {
  let answer = [];

  // 기능이 남아있다면 반복
  while (progresses.length) {
    // 기능의 작업 진도가 100미만이라면 작업 진도 추가
    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }

    let count = 0;
    // 첫번째 기능이 완료되었다면 반복
    while (progresses[0] >= 100) {
      // 첫번째 기능의 진도와 작업 속도를 제거 후 카운트 증가
      progresses.shift();
      speeds.shift();
      count++;
    }
    // 완료한 기능의 갯수를 push
    if (count > 0) {
      answer.push(count);
    }
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
