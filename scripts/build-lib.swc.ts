import esbuild from 'esbuild';
import { esmConfig, cjsConfig } from '../configs/esbuild.lib.swc.config.ts';

const buildLibraryWithSWC = async () => {
  // Сборка в ESM формате
  console.log('Building ESM format...');
  await esbuild.build({
    ...esmConfig,
    minify: true,
    sourcemap: true,
  });
  
  // Сборка в CJS формате  
  console.log('Building CJS format...');
  await esbuild.build({
    ...cjsConfig,
    minify: true,
    sourcemap: true,
  });

  console.log('SWC library build completed!');
};

buildLibraryWithSWC().catch((error) => {
  console.error('SWC build failed:', error);
  process.exit(1);
});