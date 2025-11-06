import esbuild from 'esbuild';
import { esmConfig, cjsConfig }  from '../configs/esbuild.lib.config.ts';

const buildLibrary = async () => {
  console.log('Building library in ESM format...');
  await esbuild.build(esmConfig);
  
  console.log('Building library in CJS format...');
  await esbuild.build(cjsConfig);
  
  console.log('Library build completed!');
};

buildLibrary().catch((error) => {
  console.error('Build failed:', error);
  process.exit(1);
});