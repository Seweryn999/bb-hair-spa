// Prefixes paths to files in /public with the basePath (e.g. /bb-hair-spa on GitHub Pages).
// Next.js does not add basePath to plain <img> src, CSS url() or next/image string src.
export const asset = (path: string) => `${process.env.BASE_PATH ?? ""}${path}`;
