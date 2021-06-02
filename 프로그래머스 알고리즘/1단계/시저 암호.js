function solution(s, n) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    // 공백일 경우 공백 그대로 추가
    if (s.charCodeAt(i) === 32) answer += s[i];
    // 문자 전체를 대문자로 변경 후 n을 더했을 시 90이상(Z보다 크다면) -26 하여 아스키코드 상 a 또는 A로 초기화 후 연산하여 출력
    else if (s.toUpperCase().charCodeAt(i) + n > 90)
      answer += String.fromCharCode(s.charCodeAt(i) + n - 26);
    else answer += String.fromCharCode(s.charCodeAt(i) + n);
  }
  return answer;
}

console.log(solution('AB', 1)); // 'BC'
console.log(solution('z', 1)); // 'a'
console.log(solution('a B z', 4)); // 'e F d'
console.log(solution(' ', 1)); // ' '
console.log(solution('xxXy', 23)); // 'uuUv'
