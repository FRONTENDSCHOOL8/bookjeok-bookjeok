import pb from '@/api/pocketbase';
import {
  ChattingRoomResponse,
  Collections,
  SocialingQueryAnswerResponse,
  SocialingResponse,
  UsersResponse,
} from '@/types/pocketbase-types';

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

export const fetchManagement = async (clubId: string) => {
  const socialing = await pb
    .collection(Collections.Socialing)
    .getOne<SocialingResponse<Texpand>>(clubId!, {
      expand:
        'confirmUser, answer, answer.socialing, answer.answerUser, applicant, chattingRoom',
    });

  return socialing;
};
