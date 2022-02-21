import { NavLink } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

function Navgation() {
  const [auth, , , logout] = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="my-3">
      <div className="flex place-content-between gap-4">
        <NavLink to="/" className="px-4 py-3 font-semibold">
          GoldKiller
        </NavLink>
        <div className="flex">
          <MyLink to="/notice/">공지사항</MyLink>
          <MyLink to="/activate/">탄소 중립 실천 릴레이</MyLink>
          {!auth.isLoggedIn && (
            <>
              <MyLink to="/accounts/login/">로그인</MyLink>
              <MyLink to="/accounts/Signup/">회원가입</MyLink>
            </>
          )}
          {auth.isLoggedIn && (
            <>
              <button onClick={handleLogout} className={baseClassName}>
                로그아웃
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function MyLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        baseClassName + ' ' + (isActive ? 'border-b-4 border-red-400' : '')
      }
    >
      {children}
    </NavLink>
  );
}

const baseClassName =
  'px-4 pt-3 pb-2 font-semibold hover:bg-yellow-200 hover:text-blank-500 hover:text-white';

export default Navgation;
