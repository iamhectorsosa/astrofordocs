export default {
    name: "page",
    title: "Page",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "author",
            title: "Author(s)",
            type: "array",
            of: [{ type: "reference", to: { type: "author" } }],
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: { type: "category" },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
            options: {
                timeStep: 60,
            },
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "body",
            title: "Body",
            type: "markdown",
            validation: (Rule: any) => Rule.required(),
        },
    ],

    preview: {
        select: {
            title: "title",
            category: "category.title",
            media: "mainImage",
        },
        prepare(selection: any) {
            const { category } = selection;
            return Object.assign({}, selection, {
                subtitle: category && `in ${category}`,
            });
        },
    },
};
