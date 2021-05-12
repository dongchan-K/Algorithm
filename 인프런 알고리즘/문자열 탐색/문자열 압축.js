function solution(s) {
  let answer = s[0]; // 맨 앞 문자를 미리 넣어둔다
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) count++;
    else {
      answer += s[i];
      if (count > 1) answer += count;

      count = 1; // 현재 문자와 다음 문자가 같지 않을때는 count를 1로 초기화
    }
  }
  return answer;
}

const str = 'KKHSSSSSSSE';
console.log(solution(str)); // K2HS7E
