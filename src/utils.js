const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (n) => n % 2 === 0;

const isPrime = (n) => {
  if (n % 2 === 0 && n > 2) return false;
  const s = Math.sqrt(n);
  for (let i = 3; i <= s; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

export { randomNum, isEven, isPrime };
