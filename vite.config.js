import { defineConfig, loadEnv } from 'vite'
// import react from '@vitejs/plugin-react-swc'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'
import fs from 'fs/promises'

import nodePolyfills from 'vite-plugin-node-stdlib-browser'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return {
    plugins: [react(), svgr({ exportAsDefault: true }), nodePolyfills()],
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "@/assets/fonts/style.css";`,
        },
      },
    },
    esbuild: {
      loader: 'jsx',
      include: /src\/.*\.jsx?$/,
      // loader: "tsx",
      // include: /src\/.*\.[tj]sx?$/,
      exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        plugins: [
          {
            name: 'load-js-files-as-jsx',
            setup(build) {
              build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
                loader: 'jsx',
                contents: await fs.readFile(args.path, 'utf8'),
              }))
            },
          },
        ],
      },
      exclude: ['@ethersproject/hash', 'wrtc'],
      include: ['js-sha3', '@ethersproject/bignumber'],
    },
    // build: {
    //   rollupOptions: {
    //     input: {
    //       app: './index.html', // default
    //     },
    //   },
    // },
    build: {
      cssCodeSplit: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
})
