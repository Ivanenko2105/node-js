import { Validator } from './Validator.js';

function checkValidateFunction(func, tests) {
	for (const test in tests) {
		let isPass = func(test) === tests[test];

		if (isPass) {
			console.log(` PASS: ${test}`);
		} else {
			console.log(`!FAIL: ${test}`);
			console.log(`\texpected result: ${emails[test]}`);
			console.log(`\tactual result: ${!emails[test]}`);
		}
	}
}

const emails = {
	'fi@secondpart.end': true,
	'first-part@.se=cond%p.art.end': true,
	'first.part@se=cond%part.r': true,
	'f@secondart.end,': false,
	'first-part@.se=cond@part.end': false,
	'-firstpart@.se=cond%.enddeded': false,
	'firs_tpart@.se.en': false,
	'firstpart@.se.enddeded': false,
};

let phones = {
	'+38 (099) 567 8901': true,
	'+38 099 5 6 7 8 9  01': true,
	'(09-9) 567-890-1': true,
	'--  (099) 567 890-1': true,
	'+38 (099) 567 8901 0': false,
	'+38 099 a0000000': false,
	'+38 (0989) 567 8901': false,
	'+48 (0989) 567 8901': false,
};

let passwords = {
	C00l_Pass: true,
	SupperPas1: true,
	Cool_pass: false,
	C00l: false,
};

console.log("Check 'validateEmail':");
checkValidateFunction(Validator.validateEmail, emails);
console.log();

console.log("Check 'validatePhone':");
checkValidateFunction(Validator.validatePhone, phones);
console.log();

console.log("Check 'validatePassword':");
checkValidateFunction(Validator.validatePassword, passwords);
console.log();
