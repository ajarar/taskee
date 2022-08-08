/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}', './public/*.html'],
	theme: {
		extend: {
			fontFamily: {
				signika: ['Signika', 'monospace'],
				jetBrains: ['JetBrains Mono', 'monospace'],
			},
		},
	},
	plugins: [],
};
