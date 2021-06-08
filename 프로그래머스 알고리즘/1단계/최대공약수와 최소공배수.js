// 최대공약수
const gcd = (max, min) => (max % min === 0 ? min : gcd(min, max % min));

// 최소공배수
const lcm = (max, min) => (min * max) / gcd(max, min);

const solution = (n, m) => {
  const answer = [];

  answer.push(gcd(Math.max(n, m), Math.min(n, m)));
  answer.push(lcm(Math.max(n, m), Math.min(n, m)));

  return answer;
};

console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]

// 최대공약수는 유클리드 호제법을 활용하여 푼다

// 유클리드 호제법이란 2개의 자연수 a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면 (단, a > b)
// a와 b의 최대공약수는 b와 r의 최대공약수와 같다
// 이 성질에 따라 b를 r로 나눈 나머지 r'을 구하고
// 다시 r을 r' 으로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때 나오는 수가 a 와 b의 최대공약수이다

// 최소공배수는 두 수를 곱한 후에 최대공약수로 나눈다
