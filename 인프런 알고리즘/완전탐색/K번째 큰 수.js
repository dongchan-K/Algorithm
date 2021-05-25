function solution(n, k, card) {
  let answer = 0;
  // 중복 제거를 위한 Set 객체
  let tmp = new Set();
  let arr;
  // card.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let m = j + 1; m < n; m++) {
        // Set 객체에 요소를 추가할때는 add 메서드 사용
        tmp.add(card[i] + card[j] + card[m]);
      }
    }
  }
  // Set 객체를 배열로 변경 후 내림차순으로 정렬
  arr = [...tmp].sort((a, b) => b - a);
  // k번째 큰 수를 찾기 위해 k - 1 을 인덱스로 갖는 요소 할당
  answer = arr[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
