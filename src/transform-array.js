const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
	let newArr = arr.slice(0);

	newArr.forEach((element, i) => {
		if(element === '--discard-next' && newArr[i + 1] !== undefined) {
			newArr = newArr.splice([i + 1], 1);
		}
		if(element === '--discard-prev' && newArr[i - 1] !== undefined) {
			newArr = newArr.splice([i - 1], 1);
		}
		if(element === '--double-next' && newArr[i + 1] !== undefined) {
			newArr.splice([i + 1], 0, newArr[i + 1])
		}
		if(element === '--double-prev' && newArr[i - 1] !== undefined) {
			newArr.splice([i - 1], 0, newArr[i - 1])
		}
		if(element === '--discard-next' || element === '--discard-prev' || element === '--double-next' || element === '--double-prev') {
			newArr.splice([i], 1);
		}

	});

	return newArr

}

module.exports = {
  transform
};
