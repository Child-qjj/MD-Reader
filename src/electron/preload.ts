window.addEventListener("DOMContentLoaded", () => {
	const replaceText = (selector: string, text: string) => {
		const element: HTMLElement | null = document.getElementById(selector);
		if (element) element.innerText = text;
	};
	console.log("arguments", process);

	for (const dependency of ["chrome", "node", "electron"]) {
		replaceText(
			`${dependency}-version`,
			process.versions[dependency] as string
		);
	}
});
