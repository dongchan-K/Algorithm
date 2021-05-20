// 소수 판별 함수
const isPrime = num => {
  if (num === 1) return;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const solution = arr => {
  let answer = [];
  for (const x of arr) {
    // 숫자 -> 문자열 -> 뒤집기 -> 10진수 숫자로 변경
    let res = parseInt(x.toString().split('').reverse().join(''), 10);
    if (isPrime(res)) answer.push(res);
  }
  return answer;
};

const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
