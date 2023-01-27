module.exports = {
    presets: [['@babel/preset-env', { modules: false }]],
    env: {
        es: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
        },
        cjs: {
            presets: [['@babel/preset-env', { modules: 'cjs' }]],
            plugins: ['@babel/plugin-transform-runtime'],
        },
    },
};
