import { Link, useNavigate } from 'react-router-dom';

import LoadingIndicator from 'components/LoadingIndicator';
import { useApiAxios } from 'api/base';
import { useAuth } from 'contexts/AuthContext';
import { useEffect } from 'react';

function ActivateDetail({ activateId }) {
  const [auth] = useAuth();

  const navigate = useNavigate();

  const [{ data: activate, loading, error }, refetch] = useApiAxios(
    {
      url: `/activate/api/activate/${activateId}/`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.access}`,
      },
    },
    { manual: true },
  );

  const [{ loading: deleteLoading, error: deleteError }, deleteArticle] =
    useApiAxios(
      {
        url: `/activate/api/activates/${activateId}/`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${auth.access}`,
        },
      },
      { manual: true },
    );

  const handleDelete = () => {
    if (window.confirm('Are you sure?')) {
      // REST API 에서는 DELETE 요청에 대한 응답이 없습니다.
      deleteArticle().then(() => {
        navigate('/activate/');
      });
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {loading && <LoadingIndicator />}
      {deleteLoading && <LoadingIndicator>삭제 중 ...</LoadingIndicator>}
      {error &&
        `로딩 중 에러가 발생했습니다. (${error.response?.status} ${error.response?.statusText})`}
      {deleteError &&
        `삭제 요청 중 에러가 발생했습니다. (${deleteError.response?.status} ${deleteError.response?.statusText})`}
      {activate && (
        <>
          <h3 className="text-2xl my-5">{activate.title}</h3>
          <p>by {activate.author.username}</p>

          {activate.photo && (
            <img
              src={activate.image}
              alt={activate.title}
              className="rounded"
            />
          )}
          <div>
            {activate.content.split(/[\r\n]+/).map((line, index) => (
              <p className="my-3" key={index}>
                {line}
              </p>
            ))}
          </div>
        </>
      )}
      <hr className="my-3" />
      <div className="flex gap-4 mt-3 mb-10">
        <Link to="/activate/" className="hover:text-red-400">
          목록으로
        </Link>
        <Link
          to={`/activate/${activateId}/edit/`}
          className="hover:text-red-400"
        >
          수정하기
        </Link>
        <button
          disabled={deleteLoading}
          onClick={handleDelete}
          className="hover:text-red-400"
        >
          삭제하기
        </button>
      </div>
    </div>
  );
}

export default ActivateDetail;
