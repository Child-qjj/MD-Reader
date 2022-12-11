import { marked, Renderer } from "marked";
import { escape, cleanUrl } from "./helper.js";
export default class CustomRenderer extends Renderer {
	constructor(options: marked.MarkedOptions) {
		super(options);
		this.options = options || (super.options as marked.MarkedOptions);
	}
	code(code: string, infostring: any, escaped: boolean) {
		const lang = (infostring || "").match(/\S*/)[0];
		if (this.options.highlight) {
			const out = this.options.highlight(code, lang);
			if (out != null && out !== code) {
				escaped = true;
				code = out;
			}
		}

		code = code.replace(/\n$/, "") + "\n";

		if (!lang) {
			return (
				"<pre><code>" +
				(escaped ? code : escape(code, true)) +
				"</code></pre>\n"
			);
		}

		return (
			'<pre><code class="' +
			this.options.langPrefix +
			escape(lang) +
			'">' +
			(escaped ? code : escape(code, true)) +
			"</code></pre>\n"
		);
	}

	/**
	 * @param {string} quote
	 */
	blockquote(quote: string) {
		return `<blockquote>\n${quote}</blockquote>\n`;
	}

	html(html: any) {
		return html;
	}

	/**
	 * @param {string} text
	 * @param {string} level
	 * @param {string} raw
	 * @param {any} slugger
	 */
	heading(
		text: any,
		level: any,
		raw: any,
		slugger: { slug: (arg0: any) => string | number }
	) {
		if (this.options.headerIds) {
			const id = this.options.headerPrefix || "" + slugger.slug(raw);
			return `<h${level} id="${id}">${text}</h${level}>\n`;
		}

		// ignore IDs
		return `<h${level}>${text}</h${level}>\n`;
	}

	hr() {
		return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
	}

	list(body: string, ordered: any, start: string | number) {
		const type = ordered ? "ol" : "ul",
			startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
		return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
	}

	/**
	 * @param {string} text
	 */
	listitem(text: any) {
		return `<li>${text}</li>\n`;
	}

	checkbox(checked: any) {
		return (
			"<input " +
			(checked ? 'checked="" ' : "") +
			'disabled="" type="checkbox"' +
			(this.options.xhtml ? " /" : "") +
			"> "
		);
	}

	/**
	 * @param {string} text
	 */
	paragraph(text: any) {
		return `<p>${text}</p>\n`;
	}

	/**
	 * @param {string} header
	 * @param {string} body
	 */
	table(header: string, body: string) {
		if (body) body = `<tbody>${body}</tbody>`;

		return (
			"<table>\n" + "<thead>\n" + header + "</thead>\n" + body + "</table>\n"
		);
	}

	/**
	 * @param {string} content
	 */
	tablerow(content: any) {
		return `<tr>\n${content}</tr>\n`;
	}

	tablecell(content: string, flags: { header: any; align: any }) {
		const type = flags.header ? "th" : "td";
		const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
		return tag + content + `</${type}>\n`;
	}

	/**
	 * span level renderer
	 * @param {string} text
	 */
	strong(text: any) {
		return `<strong>${text}</strong>`;
	}

	/**
	 * @param {string} text
	 */
	em(text: any) {
		return `<em>${text}</em>`;
	}

	/**
	 * @param {string} text
	 */
	codespan(text: any) {
		return `<code>${text}</code>`;
	}

	br() {
		return this.options.xhtml ? "<br/>" : "<br>";
	}

	/**
	 * @param {string} text
	 */
	del(text: any) {
		return `<del>${text}</del>`;
	}

	/**
	 * @param {string} href
	 * @param {string} title
	 * @param {string} text
	 */
	link(href: string | null, title: string, text: string) {
		href = cleanUrl(this.options.sanitize, this.options.baseUrl, href || "");
		if (href === null) {
			return text;
		}
		let out = '<a href="' + href + '"';
		if (title) {
			out += ' title="' + title + '"';
		}
		out += ">" + text + "</a>";
		return out;
	}

	/**
	 * @param {string} href
	 * @param {string} title
	 * @param {string} text
	 */
	image(href: string | null, title: any, text: any) {
		href = cleanUrl(this.options.sanitize, this.options.baseUrl, href || "");
		if (href === null) {
			return text;
		}

		let out = `<img src="${href}" alt="${text}"`;
		if (title) {
			out += ` title="${title}"`;
		}
		out += this.options.xhtml ? "/>" : ">";
		return out;
	}

	text(text: any) {
		return text;
	}
}
