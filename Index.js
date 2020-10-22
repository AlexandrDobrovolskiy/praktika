const getSumOfDigits = (n) => n ? (n % 10) + getSumOfDigits(Math.floor(n / 10)) : 0;

console.log(getSumOfDigits(123));
