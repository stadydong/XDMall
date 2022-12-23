/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		boxShadow: {
			'myinner1': 'inset 0 0 1em rgba(0,0,0,0.2)'
		},
		backgroundColor: theme => ({
			...theme('colors'),
			'zinc-150':'rgb(239 239 239 / var(--tw-bg-opacity))'
		})
	},
	plugins: []
}
