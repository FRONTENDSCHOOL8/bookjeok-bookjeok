import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function DetailClub() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('클럽의 이름이 들어가야하지 않을까요')}</title>
      </Helmet>
      <div>DetailClub</div>
    </>
  );
}

export default DetailClub;
