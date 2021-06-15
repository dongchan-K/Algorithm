function solution(d, budget) {
  let answer = 0;
  let sum = 0;

  // 배열 d를 오름차순 정렬
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    // 물품 금액의 합이 예산보다 작거나 같으면 부서 갯수 증가
    if (sum <= budget) {
      answer++;
    }
  }
  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9)); // 3
console.log(solution([2, 2, 3, 3], 10)); // 4
