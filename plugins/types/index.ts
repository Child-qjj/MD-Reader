import type { LibraryOptions, UserConfig } from "vite";

export interface Configuration {
	main: {
		entry: LibraryOptions["entry"];
		vite?: UserConfig;
	};
}
