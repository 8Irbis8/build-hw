import esbuild from 'esbuild';
import path from 'path';

const devAppConfig: esbuild.BuildOptions = {
  entryPoints: [path.resolve(process.cwd(), 'src/app', 'index.ts')],
  bundle: true,
  minify: false,
  sourcemap: true,
  outdir: 'dist/app',
  splitting: true,
  format: 'esm',
  target: 'es2020',
  platform: 'browser',
};

export default devAppConfig;