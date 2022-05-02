const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let result = false;
  const pattern = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  if (typeof sampleActivity === "string" && sampleActivity.length > 0) {
    for (let char of sampleActivity) {
      if (!pattern.includes(char)) {
        return result;
      }
    }
    if (Number(sampleActivity) <= 0 || Number(sampleActivity) >= 15) {
      return result;
    }
    return Math.ceil(Math.log(15 / sampleActivity) / (Math.LN2 / 5730));
  }
  return result;
}

module.exports = {
  dateSample,
};
