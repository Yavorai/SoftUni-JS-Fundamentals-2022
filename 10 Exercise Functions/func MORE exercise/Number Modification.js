function demo(num) {
  num = num.toString();
  let sum = 0;
  let average = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  average = sum / num.length;
  while (average <= 5) {
    num += "9";
    sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum += Number(num[i]);
    }
    average = sum / num.length;
  }
  console.log(num);
}
demo(101);
demo(5835);
