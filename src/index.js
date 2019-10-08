module.exports = function zeros(expression) {

  let two_five = {two: 0,five: 0};
  expression.split("*").forEach(f => {
    if (f.substr(-2,2) === "!!") {
      let i=parseInt(f)%2==0?2:5;
      for (i; i <= parseInt(f); i += 2) {
        count(i, two_five);
      }
    } else {
      for (let i = 1; i <= parseInt(f); i++) {
        count(i, two_five);
      }
    }
  });
  return Math.min(two_five.two, two_five.five);
}

let count = (number, two_five) => {
  while(number!==1) {

    if ((number % 2)==0) {
      two_five.two++;
      number /= 2;
      continue;
    }
    if ((number % 5)==0) {
      two_five.five++;
      number /= 5;
      continue;
    }
    break;
  }
}
