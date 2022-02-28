import { useNoticeList } from 'api/notice';
import NoticeSummary from './NoticeSummary';
import { useAuth } from 'contexts/AuthContext';
import { useEffect } from 'react';
import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import Pagination from 'rc-pagination';

function NoticeList() {
  const { noticeList } = useNoticeList();
  const [auth] = useAuth();

  const [{ data: usenoticeList, loading, error }, refetch] = useApiAxios(
    {
      url: 'notice/api/notices/',
      method: '',
      headers: {
        Authorization: `Bearer ${auth.access}`,
      },
    },
    { manual: true },
  );

  useEffect(() => {
    refetch();
  }, [auth]);

  return (
    <div className="">
      {loading && '로딩 중 ...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      {noticeList && (
        <div>
          {noticeList.map((notice) => (
            <div key={notice.id}>
              <NoticeSummary notice={notice} />
            </div>
          ))}
        </div>
      )}
      <Pagination className="m-4 flex items-center justify-center" />
      <DebugStates
        usenoticeList={usenoticeList}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default NoticeList;
