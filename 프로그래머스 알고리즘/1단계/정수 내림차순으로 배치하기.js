function solution(n) {
  let answer = n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');

  return +answer;
}

console.log(solution(118372)); // 873211
