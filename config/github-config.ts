const config = {
    headers: {
        Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
    },
};

export default config;
