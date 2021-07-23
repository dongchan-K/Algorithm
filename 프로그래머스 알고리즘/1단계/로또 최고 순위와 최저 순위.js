function solution(lottos, win_nums) {
  let answer = [];

  const lanking = {
    0: 6,
    1: 6,
    2: 5,
    3: 4,
    4: 3,
    5: 2,
    6: 1,
  };

  let max = 0;
  let min = 0;

  lottos.map(lotto => {
    if (win_nums.includes(lotto)) {
      max++;
      min++;
    } else if (lotto === 0) {
      max++;
    }
  });

  answer.push(lanking[max]);
  answer.push(lanking[min]);

  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]
