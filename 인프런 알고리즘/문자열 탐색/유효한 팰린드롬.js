function solution(s) {
  let answer = 'YES';
  // 영어 대문자를 제외한 나머지 문자는 공백으로 변환
  let upper = s.toUpperCase().replace(/[^A-Z]/g, '');

  return upper.split('').reverse().join('') === upper ? answer : 'NO';
}

const str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
