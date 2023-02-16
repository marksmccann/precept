module.exports = {
    env: {
        es: {
            presets: [['@babel/preset-env', { modules: false }]],
            plugins: [
                '@vue/babel-plugin-jsx',
                '@babel/plugin-transform-runtime',
            ],
        },
        cjs: {
            presets: [['@babel/preset-env', { modules: 'cjs' }]],
            plugins: [
                '@vue/babel-plugin-jsx',
                '@babel/plugin-transform-runtime',
            ],
        },
    },
};
