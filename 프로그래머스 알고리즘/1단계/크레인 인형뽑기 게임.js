function solution(board, moves) {
  let answer = 0;
  let count = 0;
  let arr = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0 && i === count) {
        count++;
        if (arr[arr.length - 1] === board[j][moves[i] - 1]) {
          arr.pop();
          answer += 2;
        } else {
          arr.push(board[j][moves[i] - 1]);
        }
        board[j][moves[i] - 1] = 0;
      }
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); // 4
