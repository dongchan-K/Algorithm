function solution(nums) {
  let answer = 0;
  const max = nums.length / 2; // 최대 가질수 있는 폰켓몬 수
  const length = [...new Set(nums)].length; // 중복을 제거한 배열의 길이

  answer = length > max ? max : length;

  return answer;
}

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
