export default {
    name: "category",
    title: "Category",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
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
            name: "description",
            title: "Description",
            type: "text",
        },
    ],
};
