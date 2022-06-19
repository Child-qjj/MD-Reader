import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from "./plugins/electron-load-plugin/index";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	// base: path.resolve(__dirname, './dist/'),
	plugins: [
		vue(),
		electron({
			main: {
				entry: "nothing"
			}
		})
	]
});
