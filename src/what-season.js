const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
	if (!date) return 'Unable to determine the time of year!';
	if (!Date.parse(date) || isNaN(date.getTime())) throw new Error('Invalid date!');


	const mon = date.getMonth();

	if ([11, 0, 1].includes(mon)) return 'winter';
	if ([2, 3, 4].includes(mon)) return 'spring';
	if ([5, 6, 7].includes(mon)) return 'summer';
	if ([8, 9, 10].includes(mon)) return 'autumn';
	// if (mon < 0 || mon > 11) return 'Invalid date!';
	if (![0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].includes(mon)) throw new Error('Invalid date!');



}

module.exports = {
  getSeason
};
