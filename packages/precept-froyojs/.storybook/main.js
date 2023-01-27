const path = require('path');

module.exports = {
    stories: [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/html',
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.m?js$/,
            exclude: {
                test: path.resolve(__dirname, 'node_modules'),
                exclude: path.resolve(__dirname, 'node_modules/froyojs'),
            },
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        });

        return config;
    },
};
