module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				azul: {
					claro: "#C5DFFF",
					escuro: "#061E3C",
					hover: "#1057B0",
				},
			},
			fontFamily: {
				sans: ["ui-sans-serif", "system-ui"],
				serif: ["ui-serif", "Georgia"],
				mono: ["ui-monospace", "SFMono-Regular"],
				display: ["Oswald"],
				body: ['"Open Sans"'],
			},
		},
	},
	plugins: [],
};
