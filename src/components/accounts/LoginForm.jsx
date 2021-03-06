import Button from 'components/Button';
import DebugStates from 'components/DebugStates';
import { useApiAxios } from 'api/base';
import { useAuth } from 'contexts/AuthContext';
import useFieldValues from 'hooks/useFieldValues';
import { useNavigate } from 'react-router-dom';

const INITIAL_FIELD_VALUES = { username: '', password: '' };

function LoginForm() {
  const navigate = useNavigate();

  const [auth, _, login] = useAuth();

  const [{ loading, error }, requestToken] = useApiAxios(
    {
      url: '/accounts/api/token/',
      method: 'POST',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange } =
    useFieldValues(INITIAL_FIELD_VALUES);

  const handleSubmit = (e) => {
    e.preventDefault();

    requestToken({ data: fieldValues }).then((response) => {
      const { access, refresh, username, first_name, last_name } =
        response.data;
      login({
        access,
        refresh,
        username,
        first_name,
        last_name,
      });

      console.log('access :', access);
      console.log('refresh :', refresh);
      console.log('username :', username);
      console.log('first_name :', first_name);
      console.log('last_name :', last_name);

      // 인증 후, 이동할 주소를 지정합니다.
      navigate('/');
    });
  };

  return (
    <div>
      <h2>Login</h2>

      {error?.response?.status === 401 && (
        <div className="text-red-400">로그인에 실패했습니다.</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <input
            type="text"
            name="username"
            value={fieldValues.username}
            onChange={handleFieldChange}
            placeholder="username"
            className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
          />
        </div>
        <div className="my-3">
          <input
            type="password"
            name="password"
            value={fieldValues.password}
            onChange={handleFieldChange}
            placeholder="passowrd"
            className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
          />
        </div>
        <div className="flex items-center justify-end">
          <Button>로그인</Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
