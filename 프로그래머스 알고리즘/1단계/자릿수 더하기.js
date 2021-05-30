function solution(n) {
  let answer = 0;
  n += '';

  for (let i = 0; i < n.length; i++) {
    answer += +n[i];
  }
  return answer;
}

console.log(solution(123)); // 6
console.log(solution(987)); // 24
