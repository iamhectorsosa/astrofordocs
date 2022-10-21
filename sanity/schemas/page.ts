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
            name: "order",
            title: "Order",
            description: "Please use multiples of 100",
            type: "number",
            validation: (Rule: any) =>
                Rule.required().custom((number: number) => {
                    return number % 100 === 0
                        ? true
                        : "Please use multiples of 100";
                }),
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
            description: "Please add a category for the page to be listed",
            type: "reference",
            to: { type: "category" },
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
                subtitle: category ? `in ${category}` : "Page not listed",
            });
        },
    },
};
