/**
 * This file was @generated using pocketbase-typegen
 */

import type PocketBase from 'pocketbase';
import type { RecordService } from 'pocketbase';

export enum Collections {
  BookReview = 'bookReview',
  ChattingRoom = 'chattingRoom',
  Genres = 'genres',
  Message = 'message',
  Socialing = 'socialing',
  SocialingQueryAnswer = 'socialingQueryAnswer',
  Users = 'users',
}

// Alias types for improved usability
export type IsoDateString = string;
export type RecordIdString = string;
export type HTMLString = string;

// System fields
export type BaseSystemFields<T = never> = {
  id: RecordIdString;
  created: IsoDateString;
  updated: IsoDateString;
  collectionId: string;
  collectionName: Collections;
  expand?: T;
};

export type AuthSystemFields<T = never> = {
  email: string;
  emailVisibility: boolean;
  username: string;
  verified: boolean;
} & BaseSystemFields<T>;

// Record types for each collection

export type BookReviewRecord = {
  bookTitle?: string;
  detail?: string;
  img?: string;
  title?: string;
  writer?: RecordIdString;
};

export type ChattingRoomRecord = {
  message?: RecordIdString[];
  socialing?: RecordIdString;
  title?: string;
  users?: RecordIdString[];
};

export type GenresRecord = {
  title?: string;
};

export type MessageRecord = {
  chattingRoom?: RecordIdString;
  sendUser?: RecordIdString;
  text?: string;
};

export type SocialingRecord = {
  alt?: string;
  answer?: RecordIdString[];
  applicant?: RecordIdString[];
  chattingRoom?: RecordIdString;
  confirmUser?: RecordIdString[];
  createUser?: RecordIdString;
  dateTime?: IsoDateString;
  detail?: string;
  genre?: RecordIdString;
  img?: File | string;
  isOffline?: boolean;
  like?: RecordIdString[];
  limitPerson?: number;
  location?: string;
  query?: string;
  title?: string;
  photo?: string;
};

export type SocialingQueryAnswerRecord = {
  answer?: string;
  answerUser?: RecordIdString;
  socialing?: RecordIdString;
};

export enum UsersGenderOptions {
  'female' = 'female',
  'male' = 'male',
}
export type UsersRecord = {
  birth?: IsoDateString;
  createSocialing?: RecordIdString[];
  gender?: UsersGenderOptions;
  img?: string | File;
  like?: RecordIdString[];
  nickname?: string;
  participantSocialing?: RecordIdString[];
  phone?: string;
};

// Response types include system fields and match responses from the PocketBase API
export type BookReviewResponse<Texpand = unknown> = Required<BookReviewRecord> &
  BaseSystemFields<Texpand>;
export type ChattingRoomResponse<Texpand = unknown> =
  Required<ChattingRoomRecord> & BaseSystemFields<Texpand>;
export type GenresResponse<Texpand = unknown> = Required<GenresRecord> &
  BaseSystemFields<Texpand>;
export type MessageResponse<Texpand = unknown> = Required<MessageRecord> &
  BaseSystemFields<Texpand>;
export type SocialingResponse<Texpand = unknown> = Required<SocialingRecord> &
  BaseSystemFields<Texpand>;
export type SocialingQueryAnswerResponse<Texpand = unknown> =
  Required<SocialingQueryAnswerRecord> & BaseSystemFields<Texpand>;
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> &
  AuthSystemFields<Texpand>;

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
  bookReview: BookReviewRecord;
  chattingRoom: ChattingRoomRecord;
  genres: GenresRecord;
  message: MessageRecord;
  socialing: SocialingRecord;
  socialingQueryAnswer: SocialingQueryAnswerRecord;
  users: UsersRecord;
};

export type CollectionResponses = {
  bookReview: BookReviewResponse;
  chattingRoom: ChattingRoomResponse;
  genres: GenresResponse;
  message: MessageResponse;
  socialing: SocialingResponse;
  socialingQueryAnswer: SocialingQueryAnswerResponse;
  users: UsersResponse;
};

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
  collection(idOrName: 'bookReview'): RecordService<BookReviewResponse>;
  collection(idOrName: 'chattingRoom'): RecordService<ChattingRoomResponse>;
  collection(idOrName: 'genres'): RecordService<GenresResponse>;
  collection(idOrName: 'message'): RecordService<MessageResponse>;
  collection(idOrName: 'socialing'): RecordService<SocialingResponse>;
  collection(
    idOrName: 'socialingQueryAnswer'
  ): RecordService<SocialingQueryAnswerResponse>;
  collection(idOrName: 'users'): RecordService<UsersResponse>;
};
