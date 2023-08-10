/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-bg": "var(--primary-bg)",
				"secondary-bg": "var(--secondary-bg)",
				"green-color": "var(--green-color)",
				"danger-color": "var(--danger-color)",
				"brand-color": "var(--brand-color)",
				"gray-color": "var(--gray-color)",
			},
		},
	},
	plugins: [],
};

