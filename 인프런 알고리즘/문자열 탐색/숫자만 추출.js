function solution(str) {
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      answer += str[i];
    }
  }
  return parseInt(answer, '10');
}

const str = 'g0en2T0s8eSoft';
console.log(solution(str));
