import {
  SocialingQueryAnswerResponse,
  ChattingRoomResponse,
  Collections,
} from '@/types/pocketbase-types';
import { SocialingResponse, UsersResponse } from '@/types/pocketbase-types';
import pb from '@/api/pocketbase';
import type { LoaderFunction } from 'react-router-dom';

type Texpand2 = {
  answerUser: UsersResponse;
  socialing: SocialingResponse;
};

export type TExpandedSocialingQueryAnswer =
  SocialingQueryAnswerResponse<Texpand2>;

export type Texpand = {
  confirmUser?: UsersResponse[];
  applicant?: UsersResponse[];
  chattingRoom?: ChattingRoomResponse;
  answer?: TExpandedSocialingQueryAnswer[];
};
export type TLoaderData = { socialing: SocialingResponse<Texpand> };

export const loader: LoaderFunction = async ({ params }) => {
  const socialing = await pb
    .collection(Collections.Socialing)
    .getOne<SocialingResponse<Texpand>>(params.clubId!, {
      expand:
        'confirmUser, answer, answer.socialing, answer.answerUser, applicant, chattingRoom',
    });

  const data = { socialing };
  return data;
};
