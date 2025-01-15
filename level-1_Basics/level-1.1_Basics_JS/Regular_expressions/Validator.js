export const Validator = {
	/**
	 * Checks whether a string is a valid email address.
	 * Basic format: firstpart@secondpart.end
	 * 1) firstpart can contain letters, numbers, hyphens, periods, pluses,
	 * but cannot start with them. The length must be between 2 and 20 characters.
	 * 2) secondpart can contain letters and numbers as well as special characters:
	 * .!$%&’*+/=?^_-
	 * Length 1-15 characters
	 * 3) end - mandatory first-level domain. Consists of 1-5 letters
	 * @param {String} email
	 * @returns {Boolean}
	 */
	validateEmail(email) {
		const emailRegex =
			/^[a-z0-9][a-z0-9\-.+]{1,19}@[a-z0-9.!$%&’*+/=?^_\-]{1,15}\.[a-z]{1,5}$/i;
		return emailRegex.test(email);
	},

	/**
	 * Checks if the phone number is valid
	 * Main format: +38 (099) 567 8901
	 * 1) country code +38 is optional
	 * 2) parentheses around the operator code (099) are optional.
	 * 3) hyphens and spaces are allowed anywhere.
	 * 4) maximum length of the entered string is 25 characters (including spaces, parentheses,
	 * etc.). This can be checked separately from the regular expression.
	 * @param {String} phone
	 * @returns {Boolean}
	 */
	validatePhone(phone) {
		if (phone.length > 25) {
			return false;
		}
		const phoneRegex =
			/^[- ]*(\+38)?[- ]*\(?([- ]*\d[- ]*){3}\)?([- ]*\d[- ]*){7}$/;
		return phoneRegex.test(phone);
	},

	/**
	 * Checks if the password is valid:
	 * 1) contains 8 or more characters
	 * 2) a character is a letter, number, or "_"
	 * 3) a password must contain at least one uppercase letter, one lowercase letter,
	 * and one number.
	 * @param {String} password
	 * @returns {Boolean}
	 */
	validatePassword(password) {
		const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\w{8,}$/;
		return passwordRegex.test(password);
	},
};
