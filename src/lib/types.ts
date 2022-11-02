import type { MarkdownHeading } from "astro";
export interface MetaType {
    title: string;
    keywords?: string;
    description?: string;
    baseUrl?: string;
    path?: string;
    image?: string;
}
export interface ItemType {
    label: string;
    href: string;
}

export interface DocsType {
    title: string;
    category: string;
}

export interface HeadingsType {
    items: Array<MarkdownHeading>;
}
