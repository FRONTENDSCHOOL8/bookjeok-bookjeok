/**
 * This file was @generated using typed-pocketbase
 */

// https://pocketbase.io/docs/collections/#base-collection
export interface BaseCollectionResponse {
	/**
	 * 15 characters string to store as record ID.
	 */
	id: string;
	/**
	 * Date string representation for the creation date.
	 */
	created: string;
	/**
	 * Date string representation for the creation date.
	 */
	updated: string;
	/**
	 * The collection id.
	 */
	collectionId: string;
	/**
	 * The collection name.
	 */
	collectionName: string;
}

// https://pocketbase.io/docs/api-records/#create-record
export interface BaseCollectionCreate {
	/**
	 * 15 characters string to store as record ID.
	 * If not set, it will be auto generated.
	 */
	id?: string;
}

// https://pocketbase.io/docs/api-records/#update-record
export interface BaseCollectionUpdate {}

// https://pocketbase.io/docs/collections/#auth-collection
export interface AuthCollectionResponse extends BaseCollectionResponse {
	/**
	 * The username of the auth record.
	 */
	username: string;
	/**
	 * Auth record email address.
	 */
	email: string;
	/**
	 * Whether to show/hide the auth record email when fetching the record data.
	 */
	emailVisibility: boolean;
	/**
	 * Indicates whether the auth record is verified or not.
	 */
	verified: boolean;
}

// https://pocketbase.io/docs/api-records/#create-record
export interface AuthCollectionCreate extends BaseCollectionCreate {
	/**
	 * The username of the auth record.
	 * If not set, it will be auto generated.
	 */
	username?: string;
	/**
	 * Auth record email address.
	 */
	email?: string;
	/**
	 * Whether to show/hide the auth record email when fetching the record data.
	 */
	emailVisibility?: boolean;
	/**
	 * Auth record password.
	 */
	password: string;
	/**
	 * Auth record password confirmation.
	 */
	passwordConfirm: string;
	/**
	 * Indicates whether the auth record is verified or not.
	 * This field can be set only by admins or auth records with "Manage" access.
	 */
	verified?: boolean;
}

// https://pocketbase.io/docs/api-records/#update-record
export interface AuthCollectionUpdate {
	/**
	 * The username of the auth record.
	 */
	username?: string;
	/**
	 * The auth record email address.
	 * This field can be updated only by admins or auth records with "Manage" access.
	 * Regular accounts can update their email by calling "Request email change".
	 */
	email?: string;
	/**
	 * Whether to show/hide the auth record email when fetching the record data.
	 */
	emailVisibility?: boolean;
	/**
	 * Old auth record password.
	 * This field is required only when changing the record password. Admins and auth records with "Manage" access can skip this field.
	 */
	oldPassword?: string;
	/**
	 * New auth record password.
	 */
	password?: string;
	/**
	 * New auth record password confirmation.
	 */
	passwordConfirm?: string;
	/**
	 * Indicates whether the auth record is verified or not.
	 * This field can be set only by admins or auth records with "Manage" access.
	 */
	verified?: boolean;
}

// https://pocketbase.io/docs/collections/#view-collection
export interface ViewCollectionRecord {
	id: string;
}

// utilities

type MaybeArray<T> = T | T[];

// ===== users =====

export interface UsersResponse extends AuthCollectionResponse {
	collectionName: 'users';
	nickname: string;
	gender: '' | 'female' | 'male';
	birth: string;
	like: Array<string>;
	img: string;
	participantSocialing: Array<string>;
	createSocialing: Array<string>;
	phone: string;
}

export interface UsersCreate extends AuthCollectionCreate {
	nickname?: string;
	gender?: '' | 'female' | 'male';
	birth?: string | Date;
	like?: MaybeArray<string>;
	img?: File | null;
	participantSocialing?: MaybeArray<string>;
	createSocialing?: MaybeArray<string>;
	phone?: string;
}

export interface UsersUpdate extends AuthCollectionUpdate {
	nickname?: string;
	gender?: '' | 'female' | 'male';
	birth?: string | Date;
	like?: MaybeArray<string>;
	'like+'?: MaybeArray<string>;
	'like-'?: MaybeArray<string>;
	img?: File | null;
	participantSocialing?: MaybeArray<string>;
	'participantSocialing+'?: MaybeArray<string>;
	'participantSocialing-'?: MaybeArray<string>;
	createSocialing?: MaybeArray<string>;
	'createSocialing+'?: MaybeArray<string>;
	'createSocialing-'?: MaybeArray<string>;
	phone?: string;
}

export interface UsersCollection {
	type: 'auth';
	collectionId: string;
	collectionName: 'users';
	response: UsersResponse;
	create: UsersCreate;
	update: UsersUpdate;
	relations: {
		like: SocialingCollection[];
		participantSocialing: SocialingCollection[];
		createSocialing: SocialingCollection[];
		'chattingRoom(users)': ChattingRoomCollection[];
		'message(sendUser)': MessageCollection[];
		'socialing(createUser)': SocialingCollection[];
		'socialing(applicant)': SocialingCollection[];
		'socialing(confirmUser)': SocialingCollection[];
		'socialing(like)': SocialingCollection[];
		'socialingQueryAnswer(answerUser)': SocialingQueryAnswerCollection[];
		'bookReview(writer)': BookReviewCollection[];
	};
}

// ===== chattingRoom =====

export interface ChattingRoomResponse extends BaseCollectionResponse {
	collectionName: 'chattingRoom';
	socialing: string;
	users: Array<string>;
	message: Array<string>;
	title: string;
}

export interface ChattingRoomCreate extends BaseCollectionCreate {
	socialing?: string;
	users?: MaybeArray<string>;
	message?: MaybeArray<string>;
	title?: string;
}

export interface ChattingRoomUpdate extends BaseCollectionUpdate {
	socialing?: string;
	users?: MaybeArray<string>;
	'users+'?: MaybeArray<string>;
	'users-'?: MaybeArray<string>;
	message?: MaybeArray<string>;
	'message+'?: MaybeArray<string>;
	'message-'?: MaybeArray<string>;
	title?: string;
}

export interface ChattingRoomCollection {
	type: 'base';
	collectionId: string;
	collectionName: 'chattingRoom';
	response: ChattingRoomResponse;
	create: ChattingRoomCreate;
	update: ChattingRoomUpdate;
	relations: {
		socialing: SocialingCollection;
		users: UsersCollection[];
		message: MessageCollection[];
		'message(chattingRoom)': MessageCollection[];
		'socialing(chattingRoom)': SocialingCollection[];
	};
}

// ===== message =====

export interface MessageResponse extends BaseCollectionResponse {
	collectionName: 'message';
	sendUser: string;
	chattingRoom: string;
	text: string;
}

export interface MessageCreate extends BaseCollectionCreate {
	sendUser?: string;
	chattingRoom?: string;
	text?: string;
}

export interface MessageUpdate extends BaseCollectionUpdate {
	sendUser?: string;
	chattingRoom?: string;
	text?: string;
}

export interface MessageCollection {
	type: 'base';
	collectionId: string;
	collectionName: 'message';
	response: MessageResponse;
	create: MessageCreate;
	update: MessageUpdate;
	relations: {
		'chattingRoom(message)': ChattingRoomCollection[];
		sendUser: UsersCollection;
		chattingRoom: ChattingRoomCollection;
	};
}

// ===== socialing =====

export interface SocialingResponse extends BaseCollectionResponse {
	collectionName: 'socialing';
	title: string;
	chattingRoom: string;
	createUser: string;
	applicant: Array<string>;
	confirmUser: Array<string>;
	answer: Array<string>;
	detail: string;
	genre: string;
	limitPerson: number;
	query: string;
	isOffline: boolean;
	location: string;
	img: string;
	dateTime: string;
	alt: string;
	like: Array<string>;
}

export interface SocialingCreate extends BaseCollectionCreate {
	title?: string;
	chattingRoom?: string;
	createUser?: string;
	applicant?: MaybeArray<string>;
	confirmUser?: MaybeArray<string>;
	answer?: MaybeArray<string>;
	detail?: string;
	genre?: string;
	limitPerson?: number;
	query?: string;
	isOffline?: boolean;
	location?: string;
	img?: File | null;
	dateTime?: string | Date;
	alt?: string;
	like?: MaybeArray<string>;
}

export interface SocialingUpdate extends BaseCollectionUpdate {
	title?: string;
	chattingRoom?: string;
	createUser?: string;
	applicant?: MaybeArray<string>;
	'applicant+'?: MaybeArray<string>;
	'applicant-'?: MaybeArray<string>;
	confirmUser?: MaybeArray<string>;
	'confirmUser+'?: MaybeArray<string>;
	'confirmUser-'?: MaybeArray<string>;
	answer?: MaybeArray<string>;
	'answer+'?: MaybeArray<string>;
	'answer-'?: MaybeArray<string>;
	detail?: string;
	genre?: string;
	limitPerson?: number;
	'limitPerson+'?: number;
	'limitPerson-'?: number;
	query?: string;
	isOffline?: boolean;
	location?: string;
	img?: File | null;
	dateTime?: string | Date;
	alt?: string;
	like?: MaybeArray<string>;
	'like+'?: MaybeArray<string>;
	'like-'?: MaybeArray<string>;
}

export interface SocialingCollection {
	type: 'base';
	collectionId: string;
	collectionName: 'socialing';
	response: SocialingResponse;
	create: SocialingCreate;
	update: SocialingUpdate;
	relations: {
		'users(like)': UsersCollection[];
		'users(participantSocialing)': UsersCollection[];
		'users(createSocialing)': UsersCollection[];
		'chattingRoom(socialing)': ChattingRoomCollection[];
		chattingRoom: ChattingRoomCollection;
		createUser: UsersCollection;
		applicant: UsersCollection[];
		confirmUser: UsersCollection[];
		answer: SocialingQueryAnswerCollection[];
		genre: GenresCollection;
		like: UsersCollection[];
		'socialingQueryAnswer(socialing)': SocialingQueryAnswerCollection[];
	};
}

// ===== socialingQueryAnswer =====

export interface SocialingQueryAnswerResponse extends BaseCollectionResponse {
	collectionName: 'socialingQueryAnswer';
	socialing: string;
	answerUser: string;
	answer: string;
}

export interface SocialingQueryAnswerCreate extends BaseCollectionCreate {
	socialing?: string;
	answerUser?: string;
	answer?: string;
}

export interface SocialingQueryAnswerUpdate extends BaseCollectionUpdate {
	socialing?: string;
	answerUser?: string;
	answer?: string;
}

export interface SocialingQueryAnswerCollection {
	type: 'base';
	collectionId: string;
	collectionName: 'socialingQueryAnswer';
	response: SocialingQueryAnswerResponse;
	create: SocialingQueryAnswerCreate;
	update: SocialingQueryAnswerUpdate;
	relations: {
		'socialing(answer)': SocialingCollection[];
		socialing: SocialingCollection;
		answerUser: UsersCollection;
	};
}

// ===== genres =====

export interface GenresResponse extends BaseCollectionResponse {
	collectionName: 'genres';
	title: string;
}

export interface GenresCreate extends BaseCollectionCreate {
	title?: string;
}

export interface GenresUpdate extends BaseCollectionUpdate {
	title?: string;
}

export interface GenresCollection {
	type: 'base';
	collectionId: string;
	collectionName: 'genres';
	response: GenresResponse;
	create: GenresCreate;
	update: GenresUpdate;
	relations: {
		'socialing(genre)': SocialingCollection[];
	};
}

// ===== bookReview =====

export interface BookReviewResponse extends BaseCollectionResponse {
	collectionName: 'bookReview';
	writer: string;
	title: string;
	detail: string;
	img: string;
	bookTitle: string;
}

export interface BookReviewCreate extends BaseCollectionCreate {
	writer?: string;
	title?: string;
	detail?: string;
	img?: File | null;
	bookTitle?: string;
}

export interface BookReviewUpdate extends BaseCollectionUpdate {
	writer?: string;
	title?: string;
	detail?: string;
	img?: File | null;
	bookTitle?: string;
}

export interface BookReviewCollection {
	type: 'base';
	collectionId: string;
	collectionName: 'bookReview';
	response: BookReviewResponse;
	create: BookReviewCreate;
	update: BookReviewUpdate;
	relations: {
		writer: UsersCollection;
	};
}

// ===== Schema =====

export type Schema = {
	users: UsersCollection;
	chattingRoom: ChattingRoomCollection;
	message: MessageCollection;
	socialing: SocialingCollection;
	socialingQueryAnswer: SocialingQueryAnswerCollection;
	genres: GenresCollection;
	bookReview: BookReviewCollection;
};
