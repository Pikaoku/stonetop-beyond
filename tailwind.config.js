/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				black: {
					DEFAULT: '#000000',
					off: '#0c0c0c'
				},
				white: {
					DEFAULT: '#ffffff',
					off: '#f0f0f0'
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				body: ['Lusitana', 'serif'],
				display: ['mollas', 'serif']
			}
		}
	},
	plugins: []
};
