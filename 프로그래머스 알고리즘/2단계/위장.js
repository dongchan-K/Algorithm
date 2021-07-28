function solution(clothes) {
  let answer = 0;
  const hash = {}; // 의상의 종류를 key, 갯수를 value로 담기 위한 객체 생성

  // 의상의 종류가 존재하면 갯수를 하나 더하고 존재하지 않으면 1로 설정
  clothes.forEach(cloth => {
    hash[cloth[1]] = hash[cloth[1]] ? hash[cloth[1]] + 1 : 1;
  });

  // 의상의 갯수만을 추출해 배열로 만든 후 모든 경우의 수를 구함
  // 의상을 입을 경우와 입지 않을 경우가 있기에 의상 갯수에 1을 더하고 의상 종류별로 곱하여 모든 경우를 구하고 모두 입지 않을 경우가 있기 때문에 1을 빼준다
  answer = Object.values(hash).reduce((acc, curr) => acc * (curr + 1), 1) - 1;

  return answer;
}

console.log(
  solution([
    ['yellowhat', 'headgear'],
    ['bluesunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
); // 5

console.log(
  solution([
    ['crowmask', 'face'],
    ['bluesunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ])
); // 3
