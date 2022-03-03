import { useApiAxios } from 'api/base';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';
import { useEffect } from 'react';

function NoticeDetail({ noticeId }) {
  const [auth] = useAuth();
  const navigate = useNavigate();
  const {
    data: notice,
    loading,
    error,
    refetch,
  } = useApiAxios(
    {
      url: `notice/api/notices/${noticeId}/`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.access}`,
      },
    },
    { manual: true },
  );

  const [{ loading: deleteLoading, error: deleteError }, deleteNotice] =
    useApiAxios(
      {
        url: `/notice/api/notices/${noticeId}/`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${auth.access}`,
        },
      },
      { manual: true },
    );

  const handleDelete = () => {
    if (window.confirm('Are you sure?')) {
      deleteNotice().then(() => {
        navigate('/notice/');
      });
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  if (loading) return <p>Loading ...</p>;

  return (
    <div>
      {error && (
        <p>
          {error.response.status} {error.response.statusText}
        </p>
      )}
      {notice && (
        <>
          <h2 className="text-3xl mt-10 mb-5">{notice.title}</h2>

          <img
            src="https://placeimg.com/640/480/people"
            alt=""
            className="rounded w-64 float-left mr-5 mb-2"
          />

          {notice.content.split(/[\r\n]+/).map((line, index) => {
            return (
              <p className="my-3" key={index}>
                {line}
              </p>
            );
          })}

          <div className="clear-both" />
        </>
      )}

      <hr className="text-blank-400 border-b-2 border-300" />

      <div className="flex items-center justify-end">
        {notice && (
          <Link to={`/notice/${noticeId}/edit/`} className="hover:text-red-600">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mr-1 rounded mb-1 ml-2 mt-2">
              수정
            </button>
          </Link>
        )}
        <Link to="/notice/" className="hover:text-red-600">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mr-1 rounded mb-1 ml-2 mt-2">
            목록
          </button>
        </Link>
        {notice && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mr-1 rounded mb-1 ml-2 mt-2"
            onClick={handleDelete}
          >
            삭제
          </button>
        )}
      </div>
    </div>
  );
}

export default NoticeDetail;
