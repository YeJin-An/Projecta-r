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
      url: `/activate/api/activates/${activateId}/`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.access}`,
      },
    },
    { manual: true },
  );

  const [{ loading: deleteLoading, error: deleteError }, deleteActivate] =
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
      deleteActivate().then(() => {
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
              src={activate.photo}
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
      <div className="flex items-center justify-end">
        <Link
          to={`/activate/${activateId}/edit/`}
          className="hover:text-red-400"
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mr-1 rounded mb-1 ml-2 mt-2">
            수정
          </button>
        </Link>
        <Link to="/activate/" className="hover:text-red-400">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mr-1 rounded mb-1 ml-2 mt-2">
            목록
          </button>
        </Link>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mr-1 rounded mb-1 ml-2 mt-2"
          disabled={deleteLoading}
          onClick={handleDelete}
        >
          삭제
        </button>
      </div>
    </div>
  );
}

export default ActivateDetail;
