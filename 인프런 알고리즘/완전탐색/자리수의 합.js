function solution(n, arr) {
  let answer;
  let currValue = Number.MIN_SAFE_INTEGER;
  let maxValue = 0;

  for (let i = 0; i < n; i++) {
    const str = arr[i] + '';
    let sum = 0;
    for (let j = 0; j < str.length; j++) {
      sum += parseInt(str[j]);
    }
    if (sum > currValue) {
      currValue = sum;
      maxValue = arr[i];
    } else if (sum === currValue) {
      maxValue = arr[i] > maxValue ? arr[i] : maxValue;
    }
    answer = maxValue;
  }

  return answer;
}

const arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
