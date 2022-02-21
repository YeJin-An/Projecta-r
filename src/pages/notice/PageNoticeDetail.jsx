import { useParams } from 'react-router-dom';
import NoticeDetail from 'components/notice/NoticeDetail';

function PageNoticeDetail() {
  const { noticeId } = useParams();

  return (
    <div>
      <NoticeDetail id={noticeId} />
    </div>
  );
}

export default PageNoticeDetail;
