function chart(method) {
  let res = null;
  // import random from 'lodash/random';
  let ranNum = () =>
    Math.random() * 100 < 10 ? 10 + Math.random() * 100 : Math.random() * 100;
  switch (method) {
    case "GET":
      res = [ranNum(), ranNum(), ranNum(), ranNum(), ranNum(), ranNum()];
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
