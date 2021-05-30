function solution(answers) {
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let counts = [0, 0, 0];

  answers.forEach((answer, i) => {
    if (student1[i % student1.length] === answer) {
      counts[0]++;
    }
    if (student2[i % student2.length] === answer) {
      counts[1]++;
    }
    if (student3[i % student3.length] === answer) {
      counts[2]++;
    }
  });
  const maxValue = Math.max(...counts);
  const answer = [];

  for (let i = 0; i < counts.length; i++) {
    if (maxValue === counts[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]
