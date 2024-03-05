const PB_URL = import.meta.env.VITE_PB_URL;

export default function getPbImgs({ collectionId, id, img }) {
  return img
    ? `${PB_URL}/api/files/${collectionId}/${id}/${img}`
    : '/public/defaultProfile.webp';
}
