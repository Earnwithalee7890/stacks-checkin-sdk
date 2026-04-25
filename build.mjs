import { build } from 'esbuild';

await Promise.all([
  build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    platform: 'neutral',
    format: 'esm',
    outfile: 'dist/index.js',
    external: ['@stacks/network', '@stacks/transactions'],
  }),
  build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    platform: 'neutral',
    format: 'cjs',
    outfile: 'dist/index.cjs',
    external: ['@stacks/network', '@stacks/transactions'],
  }),
]);
