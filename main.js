  function getSum(data, index) {
    let sum = 0;
    for (let i = 0; i <= index; i++) {
      sum += data[i].value;
    }
    return sum;
  }