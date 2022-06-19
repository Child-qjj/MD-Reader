import type { Plugin } from "vite";
import { ViteDevServer } from "vite";
import type { Configuration } from "../types";

export function defineConfig(config: Configuration) {
	return config;
}
export default function electron(config: Configuration): Plugin[] {
	const name = "vite-plugin-electron-typeAuto";
	const opts: Partial<Plugin> = {
		config(conf) {
			!conf.build ? (conf.build = {}) : "";
		}
	};

	return [
		{
			name: `${name}:serve`,
			apply: "serve",
			buildStart(...args) {
				console.log(config, "buildStart---");
			},
			...opts
		},
		{
			name: `${name}:build`,
			apply: "build",
			async configResolved(viteConfig) {
				console.log(viteConfig);
			},
			...opts
		}
	];
}
