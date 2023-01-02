/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(arr) {
    let resultObj = {};
  
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (resultObj[num]) {
        resultObj[num] += 1;
      } else {
        resultObj[num] = 1;
      }
    }
  
    for (let i in resultObj) {
      const num = resultObj[i];
      if (num === 1) {
        return i;
      }
    }
  
    return 0;
  }
  