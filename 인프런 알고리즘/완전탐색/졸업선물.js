function solution(m, product) {
  let answer = 0;
  const student = product.length;
  // 가격이 싼 순서대로 정렬 -> 싼 순서로 구매해야 최대한 많이 구매할 수 있음
  // product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < student; i++) {
    // 할인 받은 상품
    let money = m - (product[i][0] / 2 + product[i][1]);
    // 할인 받은 상품을 구매했기 때문에 카운트는 1로 시작
    let count = 1;
    for (let j = 0; j < student; j++) {
      // 상품 금액
      let price = product[j][0] + product[j][1];
      // 잔액보다 상품 금액이 크다면 break
      if (money < price) break;
      // 할인 받은 상품이 아니라면 잔액에서 상품 금액을 빼고 카운트 추가
      if (j !== i) {
        money -= price;
        count++;
      }
    }
    // 이전 카운트와 현재 카운트 중 큰 값을 answer에 할당
    answer = Math.max(answer, count);
  }
  return answer;
}

const arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
