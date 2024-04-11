const PB_URL = import.meta.env.VITE_PB_URL;

type TSource = { collectionId: string; id: string; img: string } | undefined;

export default function getPbImgs(source: TSource) {
  if (!source) return '';
  const { collectionId, id, img } = source;
  return img
    ? `${PB_URL}/api/files/${collectionId}/${id}/${img}`
    : '/defaultProfile.webp';
}
