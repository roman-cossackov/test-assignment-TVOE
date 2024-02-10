/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	webpack: (config, { isServer }) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		if (!isServer) {
			config.module.rules.push({
				test: /\.svg$/,
				issuer: /\.(js|ts|jsx|tsx)$/,
				use: ["url-loader"],
			});
		}

		return config;
	},
};

module.exports = nextConfig;
