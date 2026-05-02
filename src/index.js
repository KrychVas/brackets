module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openBrackets = [];
  const bracketsPairs = {};

  // Використовуємо деструктуризацію [open, close]
  bracketsConfig.forEach(([open, close]) => {
    bracketsPairs[close] = open;
    openBrackets.push(open);
  });

  for (let i = 0; i < str.length; i += 1) {
    const currentSymbol = str[i];
    const topElement = stack[stack.length - 1];

    if (bracketsPairs[currentSymbol] === currentSymbol) {
      if (topElement === currentSymbol) {
        stack.pop();
      } else {
        stack.push(currentSymbol);
      }
    } else if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }

      if (bracketsPairs[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
