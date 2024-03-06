export async function loader({ params }) {
  const socialingId = params;
  return { socialingId };
}
