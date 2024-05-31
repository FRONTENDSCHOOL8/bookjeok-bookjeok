import { queryClient } from '@/client/queryClient';
import { Badge, LikeButton, Svg } from '@/components/Atoms';
import {
  GenresResponse,
  SocialingResponse,
  UsersResponse,
} from '@/types/pocketbase-types';
import { convertTime, updateLike } from '@/utils';
import { useInfiniteQuery, useMutation } from '@tanstack/react-query';
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';

type Texpand = {
  genre: GenresResponse;
  users: UsersResponse;
};

interface ClubCardProps {
  clubInfo: SocialingResponse<Texpand>;
  userInfo: UsersResponse | null;
}
useInfiniteQuery;

const ClubCard = ({
  clubInfo: {
    id,
    photo,
    title,
    expand,
    dateTime,
    isOffline,
    location,
    limitPerson,
    confirmUser,
    like,
  },
  userInfo,
}: ClubCardProps) => {
  const [likeState, setLikeState] = useState<string[] | undefined>(like);

  const addedLikeListForSocialing = userInfo
    ? [...like, userInfo!.id]
    : undefined;
  const removedLikeListForSocialing = userInfo
    ? like.filter((i) => i !== userInfo?.id)
    : undefined;
  const addedLikeListForUser = userInfo ? [...userInfo!.like, id] : undefined;
  const removedLikeListForUser = userInfo?.like.filter((i) => i !== id);

  const addLike = useMutation({
    mutationFn: async () => {
      await Promise.all([
        updateLike('socialing', id, addedLikeListForSocialing),
        updateLike('users', userInfo!.id, addedLikeListForUser),
      ]);
    },
    onMutate: () => {
      setLikeState(addedLikeListForSocialing);
      const prevLike = likeState;
      return { prevLike };
    },
    onError: (error, variable, context) => {
      setLikeState(context!.prevLike);
      console.error(error);
    },
  });

  const removeLike = useMutation({
    mutationFn: async () => {
      await Promise.all([
        updateLike('socialing', id, removedLikeListForSocialing),
        updateLike('users', userInfo!.id, removedLikeListForUser),
      ]);
    },
    onMutate: () => {
      setLikeState(removedLikeListForSocialing);
      const prevLike = likeState;
      return { prevLike, id };
    },

    onError: (error, variables, context) => {
      setLikeState(context!.prevLike);
      console.error(error);
    },
  });

  const handleLike = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (likeState?.includes(userInfo!.id)) {
      await removeLike.mutateAsync();
    } else {
      await addLike.mutateAsync();
    }

    queryClient.invalidateQueries();
  };

  return (
    <li key={id}>
      <figure className="relative mx-auto w-full">
        <Link to={`/club/${id}`} aria-label={`${title}`}>
          <img
            className="aspect-square w-full rounded-5xl border-[1px] border-bjgray-200 object-cover"
            src={photo}
            alt={title}
          />
          <Badge className="absolute left-2 top-2 w-[30%]">
            {expand?.genre.title}
          </Badge>
        </Link>{' '}
        <LikeButton
          onClick={userInfo ? handleLike : undefined}
          id={id}
          active={userInfo ? likeState?.includes(userInfo!.id) : false}
        />
      </figure>
      <Link to={`/club/${id}`} aria-label={`${title}`}>
        <div className="flex w-full flex-col gap-y-1 px-1 py-4 pt-3">
          <div className="flex justify-between">
            <h3 className="line-clamp-2 h-12 max-w-full text-b-1-regular">
              {title}
            </h3>
          </div>
          <span className="text-pretty text-b-3-medium text-bjgray-500">
            <Svg
              color="#9e9e9e"
              size={14}
              id="calendar"
              className="mr-[2px] inline-block align-middle"
            />
            <span className="align-middle">{convertTime(dateTime, 1)}</span>
          </span>
          <div className="flex justify-between">
            <span className="flex items-center text-pretty text-b-3-medium text-bjgray-500">
              <Svg
                color="#9e9e9e"
                size={14}
                id="pin"
                className="mr-[2px] flex-shrink-0 align-middle"
              />
              <span className="line-clamp-1">
                {!isOffline ? '온라인' : location}
              </span>
            </span>
            <span className="flex items-center text-b-3-medium text-bjgray-500">
              <Svg color="#9e9e9e" size={14} id="user" className="mr-[2px]" />
              {confirmUser.length ? confirmUser.length : 0}/{limitPerson}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default memo(ClubCard);
