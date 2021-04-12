// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/

const pathResolve = (dir: string): any => {
  return resolve(__dirname, '.', dir)
}
const root: string = process.cwd()

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  root,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': pathResolve('src'),
      'components': pathResolve('src/components'),
      'style': pathResolve('src/style'),
      'assets': pathResolve('src/assets')
    }
  },
  server: {
    proxy: {
      '/api/': {
        target: 'http://baidu.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
