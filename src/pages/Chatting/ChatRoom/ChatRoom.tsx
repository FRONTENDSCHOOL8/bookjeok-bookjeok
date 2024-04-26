import pb from '@/api/pocketbase';
import { queryClient } from '@/client/queryClient';
import { ChatTextarea, MessageBubble, NomalTitle } from '@/components/Atoms';
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
import { FormEvent, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

export const ChatRoom = () => {
  useLayoutEffect(() => {
    document.documentElement.style.overflowY = 'hidden';
    return () => {
      document.documentElement.style.removeProperty('overflow-y');
    };
  });

  const { userInfo } = useUserInfoStore();
  const { chattingRoomId } = useParams();
  const chattingRoom = useLoaderData<ChattingRoomResponse<Texpand>>();

  const [observer, setObserver] = useState(false);

  useEffect(() => {
    pb.collection(Collections.ChattingRoom).subscribe<
      ChattingRoomResponse<Texpand>
    >(
      chattingRoomId!,
      function (e) {
        if (
          e.record.expand!.message[e.record.expand!.message.length - 1]
            .sendUser !== userInfo.id
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
  }, [chattingRoomId, observer, userInfo.id]);

  const { data: chattingRoomData } = useQuery({
    queryKey: ['chattingRoom', chattingRoomId, observer],
    queryFn: () => FetchChatRoom(chattingRoomId!),
    initialData: chattingRoom,
  });
  const { expand, title, message } = chattingRoomData;

  const chattingListRef = useRef<HTMLDivElement>(null);
  // console.log(chattingListRef.current);

  useLayoutEffect(() => {
    if (chattingListRef.current) {
      chattingListRef.current.scrollTop = chattingListRef.current.scrollHeight;
      // console.log('실행');
    }
  }, [message.length, observer, chattingRoomData]);

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
      // console.log('서버에 채팅 데이터 업데이트 성공');
      queryClient.invalidateQueries({
        queryKey: ['chattingRoom', chattingRoomId],
      });
    },
  });

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const { current: textarea } = textareaRef;

    const handleKeydown = (e: KeyboardEvent) => {
      const isPressedEnterKey = e.key === 'Enter';
      const isPressedShiftKey = e.shiftKey;

      if (isPressedShiftKey && isPressedEnterKey) {
        // console.log('Shift + Enter 눌렀을 때 ');
        textarea!.value += '\n';
      }
      if (isPressedEnterKey && !isPressedShiftKey) {
        // console.log('Enter만 눌렀을 때');
        e.preventDefault();
        if (!textarea!.value) {
          return;
        }
        handleSendMessage(e);
      }
    };
    if (textarea) {
      textarea.addEventListener('keydown', handleKeydown);
    }

    return () => {
      textarea?.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const handleSendMessage = async (
    e: FormEvent<HTMLFormElement> | KeyboardEvent
  ) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = Object.fromEntries(
        new FormData(formRef.current).entries()
      );
      // const newMessage = Object.fromEntries(formData.entries());
      const text = formData.text as string;
      const sendUser = expand?.users.find((u) => u.id === userInfo.id);
      const newMessage = {
        text: text,
        chattingRoom: chattingRoomId,
        sendUser: userInfo.id,
        expand: { sendUser: sendUser },
      };
      // newMessage.sendUser = userInfo.id;
      // newMessage.chattingRoom = chattingRoomId!;
      // newMessage.expand = {};
      // newMessage.expand.sendUser = sendUser;

      await mutateMessage.mutateAsync(newMessage as MessageResponse);
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
          path={`chatRoomList/${userInfo.id}`}
        >
          {title}
        </NomalTitle>
        <main className="flex h-[calc(100svh-56px)] flex-col">
          <div className="flex min-h-full flex-col">
            <div
              ref={chattingListRef}
              className="flex flex-1 flex-col overflow-y-auto bg-bjgray-50 px-4"
            >
              <ul className="mt-auto *:py-[9px]">
                {expand?.message?.map(
                  ({ id, text, created, expand }, index) => {
                    if (expand) {
                      const { sendUser } = expand;
                      return (
                        <MessageBubble
                          key={id ? id : index}
                          align={sendUser.id === userInfo.id ? 'right' : 'left'}
                          src={getPbImgs(sendUser)}
                          alt={sendUser.nickname}
                          nickname={sendUser.nickname}
                          time={created.slice(11, 16)}
                        >
                          {text}
                        </MessageBubble>
                      );
                    }
                  }
                )}
              </ul>
            </div>
            <form
              onSubmit={handleSendMessage}
              id="form"
              ref={formRef}
              className="mt-auto px-4 py-3"
            >
              {/* <ThinTextForm
                  className=""
                  onSubmit={handleSendMessage}
                  type="text"
                  placeholder="메세지를 입력하세요."
                  sendButton
                  id="text"
                  name="text"
                >
                  채팅 메세지
                </ThinTextForm> */}
              <ChatTextarea
                label="메세지 입력창"
                forwardRef={textareaRef}
                id="text"
                name="text"
                placeholder="메세지를 입력하세요."
              />
            </form>
          </div>
        </main>
      </div>
    </>
  );
};
