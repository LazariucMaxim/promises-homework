import js from '@eslint/js';

export default [
	js.configs.recommended,
	{
		rules: {
			"no-undef": "warn",
			"no-unused-vars": "warn",
		}
	}
];
