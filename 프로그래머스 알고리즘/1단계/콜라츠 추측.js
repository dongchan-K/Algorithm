function solution(num) {
  let answer = 0;

  while (num !== 1) {
    if (answer > 500) return -1;
    num = num % 2 ? num * 3 + 1 : num / 2;
    answer++;
  }
  return answer;
}

console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1
