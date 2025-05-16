export function downloadFileFromUrl(url: string, fileName: string) {
  const newWindow = window.open(url, '_blank');

  if (!newWindow) {
    let a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.href = url;
    a.download = fileName;
    a.click();
    document.body.removeChild(a);
  }
}
