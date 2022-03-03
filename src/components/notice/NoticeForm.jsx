import Button from 'components/Button';
import DebugStates from 'components/DebugStates';
import H2 from 'components/H2';
import LoadingIndicator from 'components/LoadingIndicator';
import produce from 'immer';
import { useApiAxios } from 'api/base';
import { useAuth } from 'contexts/AuthContext';
import { useEffect } from 'react';
import useFieldValues from 'hooks/useFieldValues';
import { Link } from 'react-router-dom';

const INIT_FIELD_VALUES = {
  title: '',
  content: '',
};

function NoticeForm({ noticeId, handleDidSave }) {
  const [auth] = useAuth();

  const [{ data: article, loading: getLoading, error: getError }] = useApiAxios(
    {
      url: `/notice/api/notices/${noticeId}/`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.access}`,
      },
    },
    { manual: !noticeId },
  );

  const [
    {
      loading: saveLoading,
      error: saveError,
      errorMessages: saveErrorMessages,
    },
    saveRequest,
  ] = useApiAxios(
    {
      url: !noticeId
        ? '/notice/api/notices/'
        : `/notice/api/notices/${noticeId}/`,
      method: !noticeId ? 'POST' : 'PUT',
      headers: {
        Authorization: `Bearer ${auth.access}`,
      },
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange, setFieldValues } = useFieldValues(
    article || INIT_FIELD_VALUES,
  );

  useEffect(() => {
    setFieldValues(
      produce((draft) => {
        draft.photo = '';
      }),
    );

    setFieldValues(
      produce((draft) => {
        draft.photo = '';
      }),
    );
  }, [article]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // fieldValues : 객체 (except 파일)
    // 파일을 업로드할려면, FormData 인스턴스를 써야합니다.
    const formData = new FormData();
    Object.entries(fieldValues).forEach(([name, value]) => {
      if (Array.isArray(value)) {
        const fileList = value;
        fileList.forEach((file) => formData.append(name, file));
      } else {
        formData.append(name, value);
      }
    });

    saveRequest({
      data: formData,
    }).then((response) => {
      const savedPost = response.data;
      if (handleDidSave) handleDidSave(savedPost);
    });
  };

  console.log('article:', article);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="제목을 입력해주세요"
            name="title"
            value={fieldValues.title}
            onChange={handleFieldChange}
          />
        </div>

        <div className="mb-4">
          <textarea
            type="text"
            name="content"
            placeholder="내용을 입력해주세요."
            value={fieldValues.content}
            onChange={handleFieldChange}
            className="shadow appearance-none border rounded w-full h-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type=""
            placeholder="YYYY-MM-DD"
            name="created_at"
            value={fieldValues.created_at}
            onChange={handleFieldChange}
          />
        </div>

        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="pk값을 입력"
            name="author"
            value={fieldValues.author}
            onChange={handleFieldChange}
          />
        </div>

        <div className="flex items-center justify-end">
          <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
            저장
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
            <Link to="/notice">취소</Link>
          </button>
        </div>
      </form>
    </div>
  );
}

function ErrorMessages({ errorMessages }) {
  if (!errorMessages) return null;
  return (
    <div className="text-xs text-red-500 p-1">
      {errorMessages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default NoticeForm;
