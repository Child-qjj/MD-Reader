import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from "vite-plugin-electron-hmr";
// https://vitejs.dev/config/
export default defineConfig({
	// base: path.resolve(__dirname, './dist/'),
	plugins: [vue(), electron({ mainProcess: [] })]
});
