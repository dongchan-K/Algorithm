function solution(arr1, arr2) {
  let answer;
  answer = [...arr1, ...arr2].sort((a, b) => a - b);
  return answer;
}

const a = [1, 3, 5];
const b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
