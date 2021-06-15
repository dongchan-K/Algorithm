function solution(n, arr1, arr2) {
  let answer = [];

  // 각 지도의 10진수를 2진수 문자열로 변환하며 padStart 메서드를 사용해 n보다 문자열 길이가 짧다면 0으로 채움
  const map1 = arr1.map(v => v.toString(2).padStart(n, 0));
  const map2 = arr2.map(v => v.toString(2).padStart(n, 0));

  for (let i = 0; i < n; i++) {
    let position = '';
    for (let j = 0; j < n; j++) {
      // 두 지도의 문자중 하나라도 1이면 '#' 아니면 ' ' 을 추가
      if (map1[i][j] === '1' || map2[i][j] === '1') position += '#';
      else position += ' ';
    }
    answer.push(position);
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])); // ['#####', '# # #', '### #', '# ##', '#####']
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])); // ['######', '### #', '## ##', ' #### ', ' #####', '### # ']
