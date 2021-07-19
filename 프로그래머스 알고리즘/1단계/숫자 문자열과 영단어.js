function solution(s) {
  let answer = '';
  let str = ''; // 문자를 저장
  // 영단어와 대응되는 숫자 맵
  const mapping = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (let i = 0; i < s.length; i++) {
    // 숫자일 경우 그대로 추가
    if (!isNaN(Number(s[i]))) {
      answer += s[i];
    }
    // 문자일 경우 계속 문자를 더한다
    else {
      str += s[i];
      // 숫자와 대응되는 영단어가 완성될 경우 추가하고 문자 초기화
      // 0일경우 falsy 값이되기 때문에 조건 따로 추가
      if (mapping[str] || mapping[str] === 0) {
        answer += mapping[str];
        str = '';
      }
    }
  }

  // 문자를 숫자로 바꿔서 반환
  return +answer;
}

console.log(solution('1zero23'));
console.log(solution('one4seveneight')); // 1478
console.log(solution('23four5six7')); // 234567
console.log(solution('2three45sixseven')); // 234567
console.log(solution('123')); // 123
