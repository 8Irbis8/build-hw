import esbuild from 'esbuild';
import { swcPlugin } from './esbuild.swc-plugin.ts';
import path from 'path';

const baseConfig: esbuild.BuildOptions = {
entryPoints: [  path.resolve(process.cwd(), 'src/lib', 'index.ts'),
                path.resolve(process.cwd(), 'src/lib', 'math.ts'),
                path.resolve(process.cwd(), 'src/lib', 'string.tsx')],
  bundle: true,
  external: ['react'],
  platform: 'neutral',
  target: 'es2020',
  outdir: 'dist/lib-swc',
  plugins: [swcPlugin],
};

// ESM конфиг
const esmConfig: esbuild.BuildOptions = {
  ...baseConfig,
  format: 'esm',
  outExtension: { '.js': '.mjs' },
};

// CJS конфиг  
const cjsConfig: esbuild.BuildOptions = {
  ...baseConfig,
  format: 'cjs',
  outExtension: { '.js': '.cjs' },
};

export { esmConfig, cjsConfig };