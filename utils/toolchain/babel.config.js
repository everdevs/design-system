module.exports = {
	presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
	plugins: ["@babel/plugin-transform-runtime", "@emotion/babel-plugin"],
	env: {
		test: {
			plugins: ["@babel/plugin-transform-modules-commonjs", "babel-plugin-istanbul"],
		},
	},
};
