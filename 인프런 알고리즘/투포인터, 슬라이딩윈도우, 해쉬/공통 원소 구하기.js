function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) answer.push(arr2[j]);
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}

const a = [1, 3, 9, 5, 2];
const b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
