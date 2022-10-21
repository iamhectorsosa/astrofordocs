import sanityClient from "@sanity/client";

const sanity = sanityClient({
    projectId: "eiiri25f",
    dataset: "production",
    apiVersion: "2022-09-10",
    token: `${import.meta.env.SANITY_TOKEN}`,
    useCdn: false,
});

export default sanity;
