import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import electron from "vite-plugin-electron-hmr";
import monacoEditorPlugin from "vite-plugin-monaco-editor";
// https://vitejs.dev/config/
export default defineConfig({
	// base: path.resolve(__dirname, './dist/'),electron({ main: {} })
	plugins: [vue(), , monacoEditorPlugin({})]
});
