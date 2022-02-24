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

      
       <div className="flex items-center justify-end">
        {notice && (
          <Link to={`/notice/${id}/edit/`} className="hover:text-red-600">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mr-1 rounded mb-1 ml-2 mt-2">수정</button>
          </Link>
        )}
        <Link to="/notice/" className="hover:text-red-600">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mr-1 rounded mb-1 ml-2 mt-2">목록</button>
        </Link>
      </div>
    </div>
  );
}

export default NoticeDetail;
