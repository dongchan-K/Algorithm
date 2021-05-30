function solution(n) {
  let answer = [];
  n += '';

  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(+n[i]);
  }
  return answer;
}

console.log(solution(12345)); // [5, 4, 3, 2, 1]
