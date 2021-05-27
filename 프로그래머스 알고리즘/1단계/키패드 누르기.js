function solution(numbers, hand) {
  let answer = '';
  // 왼손과 오른손의 최초 좌표
  let leftPos = [3, 0];
  let rightPos = [3, 2];

  // 좌표 설정
  const location = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  for (let i = 0; i < numbers.length; i++) {
    const currValue = numbers[i];
    const currPos = location[currValue];

    // 왼손 거리
    const leftDistance =
      Math.abs(currPos[0] - leftPos[0]) + Math.abs(currPos[1] - leftPos[1]);
    // 오른손 거리
    const rightDistance =
      Math.abs(currPos[0] - rightPos[0]) + Math.abs(currPos[1] - rightPos[1]);

    if (currValue === 1 || currValue === 4 || currValue === 7) {
      leftPos = location[currValue];
      answer += 'L';
    } else if (currValue === 3 || currValue === 6 || currValue === 9) {
      rightPos = location[currValue];
      answer += 'R';
    } else {
      if (leftDistance < rightDistance) {
        leftPos = location[currValue];
        answer += 'L';
      } else if (leftDistance > rightDistance) {
        rightPos = location[currValue];
        answer += 'R';
      } else if (hand === 'left') {
        leftPos = location[currValue];
        answer += 'L';
      } else {
        rightPos = location[currValue];
        answer += 'R';
      }
    }
  }
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')); // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')); // "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right')); // "LLRLLRLLRL"
