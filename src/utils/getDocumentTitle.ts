const SERVICE_HEADLINE = ' - 북적북적';
function getDocumentTitle(title: string) {
  return `${title}${SERVICE_HEADLINE}`;
}

export default getDocumentTitle;
