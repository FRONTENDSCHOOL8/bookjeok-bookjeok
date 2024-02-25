import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function ChatRoomList() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('채팅리스트')}</title>
      </Helmet>
      <div>ChatRoomList</div>
    </>
  );
}

export default ChatRoomList;
