import typescript from 'rollup-plugin-typescript';
import rollupNodeResolve from 'rollup-plugin-node-resolve';
import rollupCommonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify-es';
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import nodeGlobals from 'rollup-plugin-node-globals'
import vue from 'rollup-plugin-vue';
import svg from 'rollup-plugin-svg';

const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'

let config = {
  input: 'src/main.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    typescript(),
    vue({
      // compileTemplate: true,
      css: 'dist/bundle.css'
    }),
    rollupNodeResolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    rollupCommonjs(),
    nodeGlobals(),
    svg(),
  ]
}

if (isDev) {
  config.sourcemap = true
  config.plugins = config.plugins.concat([
    livereload(),
    serve({
      contentBase: './',
      port: 3000,
      open: true,
    })
  ])
}

if (isProd) {
  config.sourcemap = false
  config.plugins = config.plugins.concat([
    uglify()
  ])
}

export default config
