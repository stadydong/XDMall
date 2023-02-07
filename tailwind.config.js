/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {

		backgroundColor: theme => ({
			...theme('colors'),
			'zinc-150': 'rgb(239 239 239 / var(--tw-bg-opacity))'
		}),
		extend:{
			height:{
				"18":'4.5rem',
				"68":"17rem",
				"20-scroll":'calc(5rem + 8px)'
			},
			width:{
				"18":'4.5rem',
				"20-scroll":'calc(5rem + 18px)',
				"96-scroll":'calc(24rem + 17px)',
				"92":"23rem",
				"100":"25rem",
				"104":"26rem",
				"200":"50rem",
			},
			boxShadow:{
				'myinner1': 'inset 0 0 1em rgba(0,0,0,0.2)',
				'float-shadow': '0 3px 3px 5px rgb(230, 230, 230)'
			},
			borderRadius:{
				'10':'2.5rem'
			},
			maxHeight:{
				'84':'21rem'
			},
			minHeight:{
				'11':'2.75rem'
			},
			borderWidth:{
				'16':'16px',
				'18':'18px',
			},
			rotate:{
				"360":"360deg"
			}
		}
	},
	plugins: []
}
