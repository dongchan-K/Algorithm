function solution(priorities, location) {
  let answer = 0;
  // 요청한 문서의 위치를 알기위해 중요도, 인덱스를 저장한 배열
  let locationArr = priorities.map((priority, i) => [priority, i]);

  while (true) {
    // 가장 앞에 있는 문서
    let firstDoc = locationArr.shift();

    // 중요도가 높은 문서라면 인쇄순서를 증가시킨다
    if (locationArr.every(loc => firstDoc[0] >= loc[0])) {
      answer++;
      // 요청한 문서라면 반복문 종료
      if (firstDoc[1] === location) break;
    }
    // 중요도가 높은 문서가 아니라면 대기목록의 마지막에 넣는다
    else {
      locationArr.push(firstDoc);
    }
  }

  return answer;
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
