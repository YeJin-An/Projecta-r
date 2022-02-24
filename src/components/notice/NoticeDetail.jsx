import { useNotice } from 'api/notice';
import { Link, useNavigate } from 'react-router-dom';

function NoticeDetail({ id }) {
  const navigate = useNavigate();
  const { notice, loading, error, request } = useNotice(id);

  const handlePostDelete = () => {
    if (window.confirm('Are you sure?')) {
      request('DELETE').then(() => {
        navigate('/notice/');
      });
    }
  };

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

      <hr className="my-5" />

      <div className="flex gap-4">
        {notice && (
          <button
            className="hover:text-red-600 cursor-pointer"
            onClick={handlePostDelete}
          >
            삭제
          </button>
        )}
        {notice && (
          <Link to={`/notice/${id}/edit/`} className="hover:text-red-600">
            수정
          </Link>
        )}
        <Link to="/notice/" className="hover:text-red-600">
          목록
        </Link>
      </div>
    </div>
  );
}

export default NoticeDetail;
