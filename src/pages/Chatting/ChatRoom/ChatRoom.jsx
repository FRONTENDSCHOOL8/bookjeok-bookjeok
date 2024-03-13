import pb from '@/api/pocketbase';
import { queryClient } from '@/client/queryClient';
import { ChatTextarea, MessageBubble, NomalTitle } from '@/components/Atoms';
import useUserInfoStore from '@/store/useUserInfoStore';
import { getDocumentTitle, getPbImgs } from '@/utils';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';
import { FetchChatRoom } from './FetchChatRoom';

export function ChatRoom() {
  useLayoutEffect(() => {
    document.documentElement.style.overflowY = 'hidden';
    return () => {
      document.documentElement.style.removeProperty('overflow-y');
    };
  });

  const { userInfo } = useUserInfoStore();
  const { chattingRoomId } = useParams();
  const chattingRoom = useLoaderData();

  const [observer, setObserver] = useState(false);

  useEffect(() => {
    pb.collection('chattingRoom').subscribe(
      chattingRoomId,
      function (e) {
        // console.log(e.action);
        if (
          e.record.expand.message[e.record.expand.message.length - 1]
            .sendUser !== userInfo.id
        ) {
          setObserver(true);
          // console.log('조건처리로 업데이트 된', observer);
        }
      },
      { expand: 'message' }
    );

    return () => {
      pb.collection('chattingRoom').unsubscribe(chattingRoomId);
      setObserver(false);
      // console.log('클린업 함수로 업데이트 된', observer);
    };
  }, [chattingRoomId, observer, userInfo.id]);

  const { data: chattingRoomData } = useQuery({
    queryKey: ['chattingRoom', chattingRoomId, observer],
    queryFn: () => FetchChatRoom(chattingRoomId),
    initialData: chattingRoom,
  });
  const { expand, title, message } = chattingRoomData || {};

  const chattingListRef = useRef(null);
  console.log(chattingListRef.current);

  useLayoutEffect(() => {
    if (chattingListRef.current) {
      chattingListRef.current.scrollTop = chattingListRef.current.scrollHeight;
      console.log('실행');
    }
  }, [message.length, observer, chattingRoomData]);

  const mutateMessage = useMutation({
    mutationFn: async (newMessage) => {
      const { ...addMessage } = newMessage;

      const addedMessage = await pb
        .collection('message')
        .create(addMessage, { expand: 'sendUser' });

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
        .collection('chattingRoom')
        .update(chattingRoomId, nextChattingRoom);
    },
    onMutate: async (newMessage) => {
      const querykey = ['chattingRoom', chattingRoomId, observer];
      await queryClient.cancelQueries({ querykey });
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
      document.getElementById('text').value = '';
      return { previousChattingRoom };
    },
    onError: (error, updateData, context) => {
      queryClient.setQueryData(
        ['chattingRoom', chattingRoomId],
        context.previousChattingRoom
      );
    },
    onSettled: () => {
      console.log('서버에 채팅 데이터 업데이트 성공');
      queryClient.invalidateQueries({
        queryKey: ['chattingRoom', chattingRoomId],
      });
    },
  });

  const textareaRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const { current: textarea } = textareaRef;

    const handleKeydown = (e) => {
      const isPressedEnterKey = e.key === 'Enter';
      const isPressedShiftKey = e.shiftKey;

      if (isPressedShiftKey && isPressedEnterKey) {
        // console.log('Shift + Enter 눌렀을 때 ');
        textareaRef.current.value += '\n';
      }
      if (isPressedEnterKey && !isPressedShiftKey) {
        // console.log('Enter만 눌렀을 때');
        e.preventDefault();
        if (!textareaRef.current.value) {
          return;
        }
        handleSendMessage(e);
      }
    };
    if (textarea) {
      textarea.addEventListener('keydown', handleKeydown);
    }

    return () => {
      textarea.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const newMessage = Object.fromEntries(formData.entries());
    console.log(newMessage);
    newMessage.sendUser = userInfo.id;
    newMessage.chattingRoom = chattingRoomId;

    const sendUser = expand.users.find((u) => u.id === userInfo.id);
    newMessage.expand = {};
    newMessage.expand.sendUser = sendUser;

    await mutateMessage.mutateAsync(newMessage);
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
                {expand.message?.map(
                  ({ id, text, created, expand: { sendUser } }) => (
                    <MessageBubble
                      key={id}
                      align={sendUser.id === userInfo.id ? 'right' : ''}
                      src={getPbImgs(sendUser)}
                      alt={sendUser.nickname}
                      nickname={sendUser.nickname}
                      time={created.slice(11, 16)}
                    >
                      {text}
                    </MessageBubble>
                  )
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
                forwardRef={textareaRef}
                label="메세지 입력창"
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
}
