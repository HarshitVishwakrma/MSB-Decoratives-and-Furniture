/** @type {import('tailwindcss').Config} */

export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,jsx}",
	],
	theme: {
	  extend: {
		colors: {
		  wood: {
			light: '#d4a373',
			DEFAULT: '#a87b50',
			dark: '#744e2e',
		  }
		}
	  },
	},
	plugins: [require('tailwindcss-animate')],
  }