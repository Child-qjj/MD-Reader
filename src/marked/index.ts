import Dompurify from "dompurify";
import { marked } from "marked";
import customRenderer from "./Renderer";
import hljs from "highlight.js";
marked.Renderer = customRenderer;
marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	breaks: true,
	sanitize: false,
	highlight: function (code, lang) {
		const language = hljs.getLanguage(lang) ? lang : "plaintext";
		return hljs.highlight(code, { language }).value;
	},
	headerPrefix: "cj-md-",
	langPrefix: "hljs language-"
});
export const genMarked = (markWords: string) => {
	return Dompurify.sanitize(marked(markWords));
};
