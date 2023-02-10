import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import { babel } from '@rollup/plugin-babel';

export default [
    {
        input: 'bundle.js',
        output: {
            file: '../../bundles/precept-froyo.js',
            format: 'umd',
            name: 'precept',
            globals: { crypto: 'crypto' },
        },
        plugins: [
            nodeResolve({ browser: true }),
            commonjs(),
            babel({ babelHelpers: 'bundled' }),
            replace({
                preventAssignment: true,
                values: {
                    'process.env.NODE_ENV': JSON.stringify('development'),
                },
            }),
        ],
    },
    {
        input: 'bundle.js',
        output: {
            file: '../../bundles/precept-froyo.min.js',
            format: 'umd',
            name: 'precept',
            globals: { crypto: 'crypto' },
        },
        plugins: [
            nodeResolve({ browser: true }),
            commonjs(),
            babel({ babelHelpers: 'bundled' }),
            replace({
                preventAssignment: true,
                values: {
                    'process.env.NODE_ENV': JSON.stringify('production'),
                },
            }),
            terser(),
        ],
    },
];
