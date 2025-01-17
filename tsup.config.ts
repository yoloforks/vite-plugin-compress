import { defineConfig } from 'tsup'

export default defineConfig((config) => ({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  minify: true,
  clean: true,
  dts: true,
  watch: config.watch
}))
