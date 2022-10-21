import { marked } from "marked";
import hljs from "highlight.js";

marked.setOptions({
    highlight: function (code, lang) {
        hljs.configure({
            classPrefix: "token ",
        });
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
    },
});

const renderer = {
    heading(text: string, level: number) {
        const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");

        return `
            <h${level + 1}>
              <a name="${escapedText}" class="py-4 flex items-center gap-2 anchor group cursor-pointer font-bold no-underline" href="#${escapedText}">
                ${text}
                <svg class="hidden h-5 w-5 group-hover:inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
              </a>
            </h${level + 1}>`;
    },
};

marked.use({ renderer });

export default function parse(input: string) {
    return marked.parse(input);
}
