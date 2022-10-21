export function getName(input: string) {
    return input
        .replace(/^[0-9]*-/, "")
        .replace(/\.md$/, "")
        .replaceAll("-", " ")
        .toLowerCase()
        .replace(/\w/, (n) => n[0].toUpperCase() + n.slice(1))
        .replace(/\w{4,}/g, (n) => n[0].toUpperCase() + n.slice(1));
}

export function getPath(input: string) {
    return input.replace(/\.md$/, "").toLowerCase();
}

export function getEscapedText(input: string) {
    return input.toLowerCase().replace(/[^\w]+/g, "-");
}
