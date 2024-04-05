import { TypedPocketBase } from '@/types/pocketbase-types';
import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_PB_URL) as TypedPocketBase;
pb.autoCancellation(false);
export default pb;
