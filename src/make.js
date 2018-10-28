module.exports = function make(...args) {
  const arr = [];
  args.forEach(i => arr.push(i));
  const inner = function (...args2) {
    let i = 0;
    for (i; i < args2.length; i += 1) {
      if (typeof args2[i] !== 'function') {
        arr.push(args2[i]);
      } else {
        return arr.reduce(args2[i]);
      }
    }
    return inner;
  };
  return inner;
};
