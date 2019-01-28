import ExpressValidator from 'express-validator/check';
const { check } = ExpressValidator;

export const validateSignup = [
	check('username')
		.isString().withMessage('Username must be alphabetical characters.')
		.isLength({ min: 7 })
		.withMessage('Username must be at least 8 characters long'),

	check('email')
		.isEmail().withMessage('Email must be alphanumeric characters.')
		.isLength({ min: 8, max: 40 })
		.withMessage('Email must be at least 8 characters long and not more than 40'),

	check('password')
		.isString().withMessage('Password must be alphanumeric characters.')
		.isLength({ min: 6, max: 20 })
		.withMessage('Password must be at least 6 characters long and not more than 20'),

	check('firstname')
		.isString().withMessage('First name must be alphabetic characters.')
		.isLength({ min: 3, max: 40 })
		.withMessage('First name must be at least 3 characters long and not more than 40'),

	check('lastname')
		.isString().withMessage('Last name must be alphanumeric characters.')
		.isLength({ min: 3, max: 40 })
		.withMessage('Last name must be at least 3 characters long and not more than 40'),

	check('phonenumber')
		.isString().withMessage('Phone number must be numeric characters.')
		.isLength({ min: 10, max: 15 })
		.withMessage('Phone number must be at least 10 characters long and not more than 15'),
];

export const validateLogin = [
	check('email')
		.isEmail().withMessage('Email must be alphanumeric characters.')
		.isLength({ min: 8, max: 40 })
		.withMessage('Email must be at least 8 characters long and not more than 40'),

	check('password')
		.isString().withMessage('Password must be alphanumeric characters.')
		.isLength({ min: 6, max: 20 })
		.withMessage('Password must be at least 6 characters long and not more than 20'),
];