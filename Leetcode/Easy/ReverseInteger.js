const reverse = x => {
  let reversedNum = 0;
  let lastDigit = 0;

  while (x !== 0) {
    lastDigit = x % 10;
    x = parseInt(x / 10);
    reversedNum = reversedNum * 10 + lastDigit;

    if (reversedNum < Math.pow(-2, 31) || reversedNum > Math.pow(2, 31) - 1)
      return 0;
  }

  return reversedNum;
};

console.log(reverse(132));
console.log(reverse(0));
console.log(reverse(-561));
