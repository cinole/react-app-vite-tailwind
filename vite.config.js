import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import fs from 'fs/promises'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // esbuild: {
  //   loader: 'jsx',
  //   // include: /src\/.*\.js/,
  //   // include: /src\/.*\.jsx?$/,
  //   // loader: "tsx",
  //   // include: /src\/.*\.[tj]sx?$/,
  //   exclude: [],
  // },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     loader: {
  //       '.js': 'jsx',
  //     },
  //   },
  // },
  esbuild: { loader: 'jsx', include: /src\/.*\.jsx?$/, exclude: [] },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'load-js-files-as-jsx',
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => {
              return {
                loader: 'jsx',
                contents: await fs.readFile(args.path, 'utf8'),
              }
            })
          },
        },
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
