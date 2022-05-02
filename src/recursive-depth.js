const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (arr.filter(element => Array.isArray(element)).length != 0) {
      return  this.calculateDepth(
          [].concat(...arr.filter(element => Array.isArray(element)))) +1;
    } else {
      return 0;
    }
  }
}
const depthCalc = new DepthCalculator();
console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5])); // => 1
console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]])); // => 2
console.log(depthCalc.calculateDepth([[[]]])); // => 3
console.log(depthCalc.calculateDepth([])); // => 3

module.exports = {
  DepthCalculator,
};
