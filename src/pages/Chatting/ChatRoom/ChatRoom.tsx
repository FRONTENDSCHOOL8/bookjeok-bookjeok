import pb from '@/api/pocketbase';
import { queryClient } from '@/client/queryClient';
import { ChatTextarea, MessageBubble, NomalTitle } from '@/components/Atoms';
import DownButton from '@/components/Atoms/Buttons/DownButton/DownButton';
import ChatDate from '@/components/Atoms/ChatDate/ChatDate';
import { ChatMemberModal } from '@/components/Molecules';
import { useLoaderData } from '@/hooks';
import { FetchChatRoom, Texpand } from '@/pages/Chatting/ChatRoom';
import useUserInfoStore from '@/store/useUserInfoStore';
import {
  ChattingRoomResponse,
  Collections,
  MessageResponse,
} from '@/types/pocketbase-types';
import { getDocumentTitle, getPbImgs } from '@/utils';
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

export const ChatRoom = () => {
  const { userInfo } = useUserInfoStore();
  const { chattingRoomId } = useParams();
  const chattingRoom = useLoaderData<ChattingRoomResponse<Texpand>>();

  const [observer, setObserver] = useState(false);
  const [memberListModalState, setMemberListModalState] = useState(false);
  const [scrollPosition, setScrollPosition] = useState<number>();
  const [scrollLength, setScrollLenth] = useState<number>();

  const chattingListRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  //실시간 채팅 감지
  useEffect(() => {
    pb.collection(Collections.ChattingRoom).subscribe<
      ChattingRoomResponse<Texpand>
    >(
      chattingRoomId!,
      function (e) {
        if (
          e.record.expand!.message[e.record.expand!.message.length - 1]
            .sendUser !== userInfo!.id
        ) {
          setObserver(true);
        }
      },
      { expand: 'message' }
    );

    return () => {
      pb.collection(Collections.ChattingRoom).unsubscribe(chattingRoomId);
      setObserver(false);
    };
  }, [chattingRoomId, observer, userInfo!.id]);

  // 채팅 렌더링
  const { data: chattingRoomData } = useQuery({
    queryKey: ['chattingRoom', chattingRoomId, observer],
    queryFn: () => FetchChatRoom(chattingRoomId!),
    initialData: chattingRoom,
  });
  const { expand, title, message } = chattingRoomData;

  const expandMessage = chattingRoomData?.expand?.message;

  // 채팅 업데이트
  const mutateMessage = useMutation({
    mutationFn: async (newMessage: MessageResponse) => {
      const addedMessage = await pb
        .collection('message')
        .create(newMessage, { expand: 'sendUser' });

      const nextChattingRoom = {
        ...chattingRoomData,
        message: [...chattingRoomData.message, addedMessage.id],
        expand: {
          ...chattingRoomData.expand,
          message: chattingRoomData.expand?.message
            ? [...chattingRoomData.expand.message, addedMessage]
            : [],
        },
      };
      await pb
        .collection(Collections.ChattingRoom)
        .update(chattingRoomId!, nextChattingRoom);
    },
    onMutate: async (newMessage) => {
      const querykey = ['chattingRoom', chattingRoomId, observer];

      await queryClient.cancelQueries({ queryKey: querykey });
      const previousChattingRoom = queryClient.getQueryData(querykey);
      newMessage.created = new Date().toISOString();

      const nextChattingRoom = {
        ...chattingRoomData,
        message: [...chattingRoomData.message, newMessage.id],
        expand: {
          ...chattingRoomData.expand,
          message: chattingRoomData.expand?.message
            ? [...chattingRoomData.expand.message, newMessage]
            : [],
        },
      };

      queryClient.setQueryData(querykey, nextChattingRoom);
      (document.getElementById('text') as HTMLInputElement).value = '';
      return { previousChattingRoom };
    },
    onError: (error, updateData, context) => {
      queryClient.setQueryData(
        ['chattingRoom', chattingRoomId],
        context?.previousChattingRoom
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['chattingRoom', chattingRoomId],
      });
    },
  });

  // 윈도우 스크롤바 숨기기
  useLayoutEffect(() => {
    document.documentElement.style.overflowY = 'hidden';
    return () => {
      document.documentElement.style.removeProperty('overflow-y');
    };
  });

  // 초기 스크롤 최하단으로 렌더링
  useLayoutEffect(() => {
    if (chattingListRef.current) {
      chattingListRef.current.scrollTop = chattingListRef.current.scrollHeight;
      // console.log('실행');
    }
  }, [message.length, observer, chattingRoomData]);

  // 스크롤 초기넓이 지정
  useEffect(() => {
    setScrollLenth(chattingListRef.current?.scrollTop);
  }, []);

  // 스크롤 이동위치 지정
  useEffect(() => {
    const onScroll = () => {
      setScrollPosition(chattingListRef.current?.scrollTop);
    };
    chattingListRef.current?.addEventListener('scroll', onScroll);
    return () => {
      chattingListRef.current?.removeEventListener('scroll', onScroll);
    };
  }, []);

  // 스크롤 최하단 이동버튼
  const handleDownButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (chattingListRef.current) {
      chattingListRef.current.scrollTop = chattingListRef.current.scrollHeight;
    }
  };

  // 보내기 버튼 핸들러
  const handleSendButton = async (
    e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent
  ) => {
    if (!(e instanceof KeyboardEvent)) {
      e.preventDefault();
    }

    const sendUser = expand?.users.find((u) => u.id === userInfo!.id);
    const newMessage = {
      text: textareaRef.current?.value,
      chattingRoom: chattingRoomId,
      sendUser: userInfo!.id,
      expand: { sendUser: sendUser },
    };

    await mutateMessage.mutateAsync(newMessage as MessageResponse);
  };

  const handleBuger = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    if (memberListModalState) {
      setMemberListModalState(false);
    } else {
      setMemberListModalState(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle(title)}</title>
      </Helmet>
      <div className="min-h-svh pt-14">
        <NomalTitle
          className="fixed left-[50%] top-0 w-full max-w-[430px] translate-x-[-50%]"
          backLink
          burgerButton
          handleBurger={handleBuger}
          path={`chatRoomList/${userInfo!.id}`}
        >
          {title}
        </NomalTitle>
        <main className="relative flex h-[calc(100svh-56px)] flex-col">
          <div className="flex min-h-full flex-col">
            <div
              ref={chattingListRef}
              className=" flex flex-1 flex-col overflow-y-auto bg-bjgray-50 px-4"
            >
              <ul className="mt-auto *:py-[9px]">
                {expandMessage?.map((i, index) => {
                  const { id, text, created, expand } = i;
                  if (expand) {
                    const { sendUser } = expand;

                    const isNewDate =
                      index === 0 ||
                      (index > 0 &&
                        i.created.slice(0, 10) !==
                          expandMessage[index - 1].created.slice(0, 10));

                    return (
                      <React.Fragment key={id ? id : index}>
                        {isNewDate ? <ChatDate thisDay={created} /> : ''}
                        <MessageBubble
                          align={
                            sendUser.id === userInfo!.id ? 'right' : 'left'
                          }
                          src={getPbImgs(sendUser)}
                          alt={sendUser.nickname}
                          nickname={sendUser.nickname}
                          time={created}
                        >
                          {text}
                        </MessageBubble>
                      </React.Fragment>
                    );
                  }
                })}
              </ul>
              {scrollPosition! < scrollLength! * 0.8 ? (
                <DownButton
                  onClick={handleDownButton}
                  className="absolute bottom-20 right-4 opacity-85"
                />
              ) : null}
            </div>
            <div className="mt-auto px-4 py-3">
              <ChatTextarea
                label="메세지 입력창"
                forwardRef={textareaRef}
                onClick={handleSendButton}
                id="text"
                name="text"
                placeholder="메세지를 입력하세요."
              />
            </div>
          </div>
          <ChatMemberModal
            users={expand?.users}
            onClickBlank={handleBuger}
            open={memberListModalState}
          />
        </main>
      </div>
    </>
  );
};
