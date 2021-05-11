function solution(s) {
  let answer = 'YES';
  let upper = s.toUpperCase();

  return upper.split('').reverse().join('') === upper ? answer : 'NO';
}

const str = 'goooG';
console.log(solution(str));
