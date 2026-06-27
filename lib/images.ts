export function getImageUrl(filename: string | null | undefined): string {
  if (!filename) return "/placeholder.svg";
  if (filename.startsWith("/")) return filename;
  return `/images/${filename}`;
}
