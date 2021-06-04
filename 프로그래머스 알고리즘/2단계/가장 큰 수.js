function solution(numbers) {
  const answer = numbers
    .map(number => number.toString())
    // 숫자 2개를 문자열로 연결후 비교해가며 내림차순 정렬
    .sort((a, b) => b + a - (a + b))
    .join('');

  // 문자열의 맨 앞자리가 0이라면 결국 가장 큰 수도 0이기 때문에 '0'을 반환, 아닐 경우 문자열 그대로 반환
  return answer[0] === '0' ? '0' : answer;
}

console.log(solution([6, 10, 2])); // '6210'
console.log(solution([3, 30, 34, 5, 9])); // '9534330'
