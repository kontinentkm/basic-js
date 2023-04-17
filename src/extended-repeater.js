const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	str = String(str);
 
	let repeatTimes = options.repeatTimes;
	let separator = options.separator !== undefined ? options.separator : '+';
	let addition = options.addition !== undefined ? String(options.addition) : '';
	let additionRepeatTimes = options.additionRepeatTimes;
	let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';
 
	let additionString = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
	let result = (str + additionString + separator).repeat(repeatTimes - 1) + str + additionString;
 
	return result;
}

module.exports = {
  repeater
};


