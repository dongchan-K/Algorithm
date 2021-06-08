function solution(n) {
  let answer = '';
  let count = n;

  // 몫이 0이 아니라면 계속 3진법으로 변환
  while (count !== 0) {
    // 나머지를 문자열에 저장 -> 애초에 역순으로 저장했기 때문에 10진법으로 변경할때 뒤집어 줄 필요 없음
    answer += count % 3;
    // 몫을 소수점 내림한 값으로 저장
    count = Math.floor(count / 3);
  }

  // 10진법으로 변환 후 반환
  return parseInt(answer, 3);
}

console.log(solution(45)); // 7
console.log(solution(125)); // 229

// toString() 메서드를 사용하여 인수로 3을 전달해 3진법으로 변경 후 split() -> reverse() -> join() 메서드를 사용하여 문자열 -> 배열 -> 배열 뒤집기 -> 문자열로 변경 후 parseInt() 메서드를 활용하여 10진수로 변환 후 푸는 방법도 있다

// toString 메서드에 인수를 전달하면 숫자를 해당 진법의 문자열로 반환한다는 점을 알아두자
