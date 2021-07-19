function solution(dartResult) {
  let answer = 0;
  let num = 0; // 점수를 저장
  const stack = []; // 점수만을 관리하는 stack

  for (let i = 0; i < dartResult.length; i++) {
    // 점수인 경우
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      // 점수가 10인 경우
      if (+dartResult[i] === 1 && +dartResult[i + 1] === 0) {
        num = 10;
        // 10인 경우 2개 문자를 차지하므로 다음 문자 생략
        i++;
      } else {
        num = dartResult[i];
      }
    } else if (dartResult[i] === 'S') {
      // 보너스가 S일 경우 점수 숫자로 변환하여 push
      stack.push(+num);
    } else if (dartResult[i] === 'D') {
      // 보너스가 D일 경우 점수 2제곱 하고 숫자로 변환하여 push
      stack.push(+Math.pow(num, 2));
    } else if (dartResult[i] === 'T') {
      // 보너스가 T일 경우 3제곱 하고 숫자로 변환하여 push
      stack.push(+Math.pow(num, 3));
    } else if (dartResult[i] === '#') {
      // 아차상이 나온 경우
      stack[stack.length - 1] *= -1;
    } else if (dartResult[i] === '*') {
      // 첫번째 기회에 스타상이 나온 경우 해당 점수만 2배
      if (stack.length === 1) {
        stack[stack.length - 1] *= 2;
      } else {
        // 해당 점수를 2배
        stack[stack.length - 1] *= 2;
        // 이전 점수를 2배
        stack[stack.length - 2] *= 2;
      }
    }
  }

  // 스택에 저장한 모든 점수를 더한다
  for (const x of stack) {
    answer += x;
  }

  return answer;
}

console.log(solution('1S2D*3T')); // 37
console.log(solution('1D2S#10S')); // 9
console.log(solution('1D2S0T')); // 3
console.log(solution('1S*2T*3S')); // 23
console.log(solution('1D#2S*3S')); // 5
console.log(solution('1T2D3D#')); // -4
console.log(solution('1D2S3T*')); // 59
