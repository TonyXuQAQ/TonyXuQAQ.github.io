const externalUrlPattern = /^(?:https?:|mailto:|tel:|#)/i;

export function resolveUrl(url: string): string {
  if (!url || externalUrlPattern.test(url)) {
    return url;
  }

  const normalizedPath = url.replace(/^\.\//, "").replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
}

export function isExternalUrl(url: string): boolean {
  return /^https?:/i.test(url);
}
