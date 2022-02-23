import DebugStates from 'components/DebugStates';
import { useApiAxios } from 'api/base';
import useFieldValues from 'hooks/useFieldValues';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';

const INITIAL_FIELD_VALUES = {
  username: '',
  password: '',
  password2: '',
  Email: '',
};

function SignupForm() {
  const navigate = useNavigate();

  const { fieldValues, handleFieldChange } =
    useFieldValues(INITIAL_FIELD_VALUES);

  const [{ loading, error, errorMessages }, requestToken] = useApiAxios(
    {
      url: '/accounts/api/signup/',
      method: 'POST',
    },
    { manual: true },
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    requestToken({ data: fieldValues }).then((response) => {
      const { username, password, password2, email } = response.data;

      navigate('/');
    });
  };

  return (
    <div>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <input
            type="text"
            name="username"
            value={fieldValues.username}
            onChange={handleFieldChange}
            placeholder="Username"
            className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
          />
        </div>
        <div className="my-3">
          <input
            type="password"
            name="password"
            value={fieldValues.password}
            onChange={handleFieldChange}
            placeholder="Passowrd"
            className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
          />
        </div>
        <div className="my-3">
          <input
            type="password"
            name="password2"
            value={fieldValues.password2}
            onChange={handleFieldChange}
            placeholder="Passowrd2"
            className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
          />
        </div>
        <div className="my-3">
          <input
            type="text"
            name="Address"
            value={fieldValues.address}
            onChange={handleFieldChange}
            placeholder="Address"
            className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
          />
        </div>
        <div className="my-3">
          <input
            type="text"
            name="Email"
            value={fieldValues.email}
            onChange={handleFieldChange}
            placeholder="Email"
            className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
          />
        </div>
        <div className="my-3">
          <input
            type="text"
            name="phoneNumber"
            value={fieldValues.phonenumber}
            onChange={handleFieldChange}
            placeholder="PhoneNumber"
            className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
          />
        </div>
        <Button>회원가입</Button>
        <Button>취소</Button>
      </form>

      <DebugStates
        fieldValues={fieldValues}
        error={error}
        errorMessages={errorMessages}
      />
    </div>
  );
}

export default SignupForm;
