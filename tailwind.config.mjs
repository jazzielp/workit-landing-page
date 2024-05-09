/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'dark-purple': '#24053E',
			'davy-grey': '#584D62',
			'eucaplyptus': '#44FFA1',
			'ghost-white': '#FCF8FF',
			'white': '#FFFFFF'
		},
		fontFamily: {
			'manrope': ['Manrope Variable', 'sans-serif'],
			'fraunces': ['Fraunces Variable', 'serif']
		}
	},
	plugins: [],
}
