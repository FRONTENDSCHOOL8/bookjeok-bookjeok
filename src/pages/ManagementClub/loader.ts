import type { LoaderFunction } from 'react-router-dom';
import { fetchManagement } from './fetchManagement';

export const loader: LoaderFunction = ({ params }) => {
  const { clubId } = params;

  const data = fetchManagement(clubId!);
  return data;
};
