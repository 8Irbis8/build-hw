import esbuild from 'esbuild';

import path from 'path';

const prodAppConfig: esbuild.BuildOptions = {
        bundle: true,
        outdir: 'dist/app',
        entryPoints: [path.resolve(process.cwd(), 'src/app', 'index.ts')],
        jsx: 'automatic',
        format: 'esm',
        minify: true,
        sourcemap: true,
        splitting: true,
        target: 'es2020',
        platform: 'browser',
};

export default prodAppConfig