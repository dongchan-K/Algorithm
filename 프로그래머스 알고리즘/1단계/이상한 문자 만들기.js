function solution(s) {
  let answer = '';
  let str = s.split(' ');

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str[i].length; j++) {
      answer += j % 2 === 0 ? str[i][j].toUpperCase() : str[i][j].toLowerCase();
    }
    if (i < str.length - 1) answer += ' ';
  }
  return answer;
}

console.log(solution('try hello world'));
