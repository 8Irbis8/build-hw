import { transform } from '@swc/core';
import { readFileSync } from 'fs';
import type { Plugin } from 'esbuild';

export const swcPlugin: Plugin = {
  name: 'swc-transformer',
  setup(build) {
    build.onLoad({ filter: /\.ts$/ }, async (args) => {
      const contents = readFileSync(args.path, 'utf8');
      
      const result = await transform(contents, {
        jsc: {
          parser: { syntax: 'typescript' },
          target: 'es2020',
        },
      });

      return { contents: result.code, loader: 'js' };
    });
  },
};