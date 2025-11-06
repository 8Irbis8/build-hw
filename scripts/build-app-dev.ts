import esbuild from 'esbuild';
import devAppConfig from '../configs/esbuild.app.dev.config.ts';

const buildDev = async () => {
    // Watch режим через context
    const context = await esbuild.context(devAppConfig);
    
    await context.watch();
    
    // запуск dev сервера
    const { port } = await context.serve({
      servedir: 'dist',
      port: 3000,
    });
    
    console.log(`Dev server running at http://localhost:${port}`);
};

buildDev().catch((error) => {
  console.error('Dev build failed:', error);
  process.exit(1);
});