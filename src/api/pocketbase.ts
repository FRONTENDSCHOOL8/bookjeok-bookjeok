import PocketBase from 'pocketbase';
import { TypedPocketBase } from '@/types/pocketbase-types';
// import { TypedPocketBase } from 'typed-pocketbase';
// import { Schema } from '@/types/Database';

const pb = new PocketBase(import.meta.env.VITE_PB_URL) as TypedPocketBase;
pb.autoCancellation(false);
export default pb;

// export const db = new TypedPocketBase<Schema>(import.meta.env.VITE_PB_URL);
