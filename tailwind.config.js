/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
		screens: {
			xs: "550px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				aligo: {
					...require("daisyui/src/theming/themes")["light"],
					primary: "#f31cd0",
					secondary: "#f91968",
					accent: "#fc7b52",
					"primary-content": "#fff",
					"secondary-content": "#fff",
					"accent-content": "#fff",

					info: "#2094f3",
					success: "#27c029",
					warning: "#ff9900",
					error: "#cf2849",
					"info-content": "#fff",
					"success-content": "#fff",
					"warning-content": "#fff",
					"error-content": "#fff",
				},
			},
		],
	},
}
