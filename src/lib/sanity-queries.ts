const allCategoriesFields = `{
    title,
    order,
    "slug": slug.current,
}`;

export const allCategoriesQuery = `*[_type == "category" && !(_id in path("drafts.**"))] | order(order) ${allCategoriesFields}`;

const allPagesFields = `{
    title,
    "slug": slug.current,
    order,
    category->{title, "slug": slug.current},
    body,
    "lastUpdated": _updatedAt
}`;

export const allPagesQuery = `*[_type == "page" && !(_id in path("drafts.**"))] | order(order) ${allPagesFields}`;