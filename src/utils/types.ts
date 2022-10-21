export interface ConfigType {
    headers: {
        Authorization: string;
    };
}

export interface PathType {
    name: string;
    path: string;
    type: "file" | "dir";
}
export interface DocType {
    name: string;
    path: string;
}

export interface ContentType {
    title: string;
    slug: string;
    body: string;
}
