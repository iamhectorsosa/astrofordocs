export interface BasicType {
    title: string;
    order: number;
    slug: string;
}

export interface CategoryType extends BasicType {}

export interface PageType extends BasicType {
    category: Pick<CategoryType, "title" | "slug">;
    body: string;
    lastUpdated: string;
}
