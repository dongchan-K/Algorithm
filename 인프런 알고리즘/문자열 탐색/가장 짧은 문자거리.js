function solution(s, t) {
  let answer = [];
  let distance = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      distance = 0;
      answer.push(distance);
    } else {
      distance++;
      answer.push(distance);
    }
  }

  check = 0;
  for (let j = s.length - 1; j >= 0; j--) {
    if (s[j] === t) {
      distance = 0;
    } else {
      distance++;
      answer[j] = Math.min(answer[j], distance);
    }
  }

  return answer;
}

const str = 'teachermode';
console.log(solution(str, 'e'));
