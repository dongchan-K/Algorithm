function solution(s) {
  let answer = '';

  s.length % 2
    ? (answer += s[Math.floor(s.length / 2)])
    : (answer += s[s.length / 2 - 1] + s[s.length / 2]);
  return answer;
}

console.log(solution('abcde')); // c
console.log(solution('qwer')); // we
