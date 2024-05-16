
import resolve from '@rollup/plugin-node-resolve';
export default {
    input: 'src/main.js',
    output:{
        file:'src/editor.js',
        format:'iife'
    },
    plugins:[resolve()]
}