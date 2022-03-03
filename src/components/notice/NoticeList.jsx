import { useApiAxios } from 'api/base';
import NoticeSummary from './NoticeSummary';
import { useAuth } from 'contexts/AuthContext';
import { useEffect } from 'react';
import DebugStates from 'components/DebugStates';
import Pagination from 'rc-pagination';

function NoticeList() {
  const [auth] = useAuth();

  const [{ data: noticeList, loading, error }, refetch] = useApiAxios(
    {
      url: 'notice/api/notices/',
      method: 'GET',
      headers: {
        Authorization: `Bearer${auth.access}`,
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
    </div>
  );
}

export default NoticeList;
