// Joins BASE_URL with a relative path and strips any leading slash from the relative.
export function assetPath(rel: string) {
  const base = import.meta.env.BASE_URL || '/';
  return base + rel.replace(/^\/+/, '');
}

export default assetPath;