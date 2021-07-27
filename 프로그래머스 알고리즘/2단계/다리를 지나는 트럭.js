function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridge = new Array(bridge_length).fill(0); // 다리의 길이만큼 큐를 생성

  // 다리의 길이가 있다면 반복
  while (bridge.length) {
    // 매 반복마다 시간을 더하고 큐의 첫번째 요소를 뺌
    answer++;
    bridge.shift();

    // 트럭이 남아있다면
    if (truck_weights.length) {
      const sum = bridge.reduce((acc, v) => acc + v, 0);

      // 다리에 올라가있는 무게와 현재 트럭의 합이 견딜 수 있는 무게를 넘지 않으면 다리에 트럭의 무게를 추가
      if (sum + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      }
      // 아니라면 0을 추가
      else {
        bridge.push(0);
      }
    }
  }

  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110
