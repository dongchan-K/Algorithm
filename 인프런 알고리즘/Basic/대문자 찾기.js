function solution(s) {
  let answer = 0;

  for (const x of s) {
    if (x === x.toUpperCase()) answer++;
  }

  return answer;
}

const str = 'KoreaTimeGood';
console.log(solution(str));
