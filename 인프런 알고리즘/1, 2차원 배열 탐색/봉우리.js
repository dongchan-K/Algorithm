function solution(arr) {
  let answer = 0;
  // 좌우, 상하 비교를 위한 변수 dx, dy
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // 봉우리인지 확인하기 위한 변수
      let check = true;
      // dx, dy의 모든 값을 비교하기 위한 반복문
      for (let k = 0; k < dx.length; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < arr.length &&
          ny >= 0 &&
          ny < arr.length &&
          arr[nx][ny] >= arr[i][j]
        ) {
          check = false;
          break;
        }
      }
      if (check) {
        answer++;
      }
    }
  }

  return answer;
}

const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
