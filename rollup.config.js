import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
    output: {
        name: 'vega.SPARQL',
        file: 'dist/bundle.js',
        format: 'umd',
        globals: {
            vega: 'vega'
        }
    },
    external: ['vega'], 
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        })
    ]
  };