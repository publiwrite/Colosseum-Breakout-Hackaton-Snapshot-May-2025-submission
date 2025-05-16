export function getCookieValue(name: string) {
  const regex = new RegExp(`(^| )${name}=([^;]+)`);
  const match = document.cookie.match(regex);
  if (match) {
    return decodeURIComponent(match[2]);
  }
}
