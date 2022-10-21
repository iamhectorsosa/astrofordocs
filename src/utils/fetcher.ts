import type { ConfigType } from "../utils/types";

const fetcher = async (
    endpoint: string,
    config: ConfigType,
    response?: "text"
) => {
    const res = await fetch(endpoint, config);
    if (response === "text") {
        return res.text();
    }
    return res.json();
};

export default fetcher;
