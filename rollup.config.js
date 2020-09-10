import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import vue from "rollup-plugin-vue"
import scss from "rollup-plugin-scss"
import includePaths from "rollup-plugin-includepaths"
import { terser } from "rollup-plugin-terser"
const external = [
    'vue',
    '@impvis/components',
    'katex',
    'katex/dist/katex.min.css'
]
const plugins =[
    includePaths({paths:['./']}),
    resolve(),
    commonjs(),
    vue({css:true}),
    scss({output:'./dist/impvis-components-katex.css'}),
    terser()
]
export default [
    {
        input:'src/impvis-components-katex.js',
        external:external,
        output:{
            format:'esm',
            dir:'./dist'
        },
        plugins:plugins
    }
]
