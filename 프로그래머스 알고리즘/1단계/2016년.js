function solution(a, b) {
  let answer = '';
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const currDay = new Date(2016, a - 1, b).getDay();
  answer = days[currDay];

  return answer;
}

console.log(solution(5, 24)); // 'TUE'
