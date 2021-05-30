const solution = x => {
  let answer = true;
  let sum = 0;
  x += '';

  for (let i = 0; i < x.length; i++) {
    sum += +x[i];
  }
  answer = x % sum ? false : true;
  return answer;
};

console.log(solution(10)); // true
console.log(solution(12)); // true
console.log(solution(11)); // false
console.log(solution(13)); // false
