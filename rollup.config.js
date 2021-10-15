const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const dts = require('rollup-plugin-dts').default;

const buildConfig = {
  input: 'src/index.ts',
  plugins: [
    nodeResolve({
      extensions: ['.js', '.ts'],
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.ts'],
    }),
  ],
};

module.exports = [
  //
  {
    ...buildConfig,
    output: [{ file: 'dist/index.js', format: 'cjs' }],
  },
  // es
  {
    ...buildConfig,
    output: [{ file: 'dist/index.es.js', format: 'es' }],
  },
  // d.ts
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
