import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import fs from 'fs'
import json from '@rollup/plugin-json'
import nodeResolve from '@rollup/plugin-node-resolve'
import stripPropTypes from 'rollup-plugin-strip-prop-types'
import terser from '@rollup/plugin-terser'

/**
 * @type {import('rollup').RollupOptions}
 */
const config = fs.readdirSync('src').map((component) => ({
  input: `src/${component}/index.js`,
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    commonjs({ include: /node_modules/ }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      babelHelpers: 'runtime',
      plugins: [
        '@babel/plugin-external-helpers',
        '@babel/plugin-transform-runtime',
        'babel-plugin-styled-components',
      ],
      presets: [
        '@babel/preset-env',
        ['@babel/preset-react', { runtime: 'automatic' }],
      ],
    }),
    json(),
    stripPropTypes({
      sourceMap: false,
    }),
    terser(),
  ],
  output: [
    {
      file: `cjs/${component}.js`,
      format: 'cjs',
    },
    {
      file: `dist/${component}.js`,
      format: 'esm',
    },
  ],
}))

export default config
