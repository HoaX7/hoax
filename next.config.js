const withFont = require("next-fonts");

module.exports = withFont({
	webpack: (config) => {
		return config;
	},
	buildDir: "build",
});
