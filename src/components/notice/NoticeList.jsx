import { useNoticeList } from 'api/notice';
import NoticeSummary from './NoticeSummary';
import { NoticeTable } from './NoticeTable';

function NoticeList() {
  const { noticeList } = useNoticeList();

  return (
    <div>
      {noticeList.map((notice) => (
        <NoticeSummary notice={notice} key={notice.id} />
      ))}
    </div>
  );
}

export default NoticeList;
