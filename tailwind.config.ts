import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './src/libs/**/*.{html,js,svelte,ts}'],
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
				},
				magnum: {
					'50': '#fff9ed',
					'100': '#fef2d6',
					'200': '#fce0ac',
					'300': '#f9c978',
					'400': '#f7b155',
					'500': '#f38d1c',
					'600': '#e47312',
					'700': '#bd5711',
					'800': '#964516',
					'900': '#793a15',
					'950': '#411c09'
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				body: ['Lusitana', 'serif'],
				mono: [
					'ui-monospace',
					'SFMono-Regular',
					'SF Mono',
					'Menlo',
					'Consolas',
					'Liberation Mono',
					'monospace'
				],
				display: ['mollas', 'serif']
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						code: {
							position: 'relative',
							borderRadius: theme('borderRadius.md')
						}
					}
				}
			})
		}
	},
	plugins: [
		typography,
		plugin(function ({ addVariant, matchUtilities, theme }) {
			addVariant('hocus', ['&:hover', '&:focus']);
			// Square utility
			matchUtilities(
				{
					square: (value) => ({
						width: value,
						height: value
					})
				},
				{ values: theme('spacing') }
			);
		})
	]
} satisfies Config;
