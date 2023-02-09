module.exports = {
    env: {
        es: {
            presets: [
                ['@babel/preset-env', { modules: false }],
                '@babel/preset-react',
            ],
            plugins: ['@babel/plugin-transform-runtime'],
        },
        cjs: {
            presets: [
                ['@babel/preset-env', { modules: 'cjs' }],
                '@babel/preset-react',
            ],
            plugins: ['@babel/plugin-transform-runtime'],
        },
    },
};
