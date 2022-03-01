import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    // root: path.resolve(process.cwd(), 'src'),
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(process.cwd()) }],
    },
})
