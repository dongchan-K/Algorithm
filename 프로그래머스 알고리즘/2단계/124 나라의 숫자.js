function solution(n) {
  let answer = '';
  const numberArr = [4, 1, 2]; // 0부터 시작하지 않기 때문에 4, 1, 2 순으로 배치

  while (n) {
    answer = numberArr[n % 3] + answer;
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }

  return answer;
}

console.log(solution(1)); // 1
console.log(solution(2)); // 2
console.log(solution(3)); // 4
console.log(solution(4)); // 11
console.log(solution(10)); // 41
