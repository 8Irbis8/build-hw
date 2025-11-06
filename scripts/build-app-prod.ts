import esbuild from 'esbuild';
import prodAppConfig from '../configs/esbuild.app.prod.config.ts';
esbuild
    .build(prodAppConfig)
    .then(console.log)
    .catch(console.error);
