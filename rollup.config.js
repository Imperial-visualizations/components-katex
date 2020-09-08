import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import vue from "rollup-plugin-vue"
import scss from "rollup-plugin-scss"
import includePaths from "rollup-plugin-includepaths"
const external = [
    'vue',
    '@impvis/components'
]
const plugins =[
    includePaths({paths:['./']}),
    resolve(),
    commonjs(),
    vue({css:true}),
    scss({output:'./dist/impvis-components-katex.css'}),
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