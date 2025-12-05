export default function formatImage(url, width = 300) {
  if (url) {
    return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`);
  }
  return null;
}
