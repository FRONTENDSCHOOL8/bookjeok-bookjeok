import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function ChatRoom() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 이름이 들어가야합니다')}</title>
      </Helmet>
      <div>ChatRoom</div>
    </>
  );
}

export default ChatRoom;
