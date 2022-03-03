import ActivateSummary from './ActivateSummary';
import DebugStates from 'components/DebugStates';
import { useApiAxios } from 'api/base';
import { useAuth } from 'contexts/AuthContext';
import { useEffect } from 'react';

function ActivateList() {
  const [auth] = useAuth();

  const [{ data: activateList, loading, error }, refetch] = useApiAxios(
    {
      url: '/activate/api/activates/',
      method: 'GET',
      // 방법 2)
      headers: {
        Authorization: `Bearer ${auth.access}`,
      },
    },
    { manual: true },
  );

  useEffect(() => {
    // if (auth.isLoggedIn) {}
    // 방법 1)
    // refetch({
    //   headers: {
    //     Authorization: `Bearer ${auth.access}`,
    //   },
    // });
    refetch();
  }, [auth]);

  return (
    <div className="my-5 ">
      {loading && '로딩 중 ...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      {activateList && (
        <div className="flex flex-wrap">
          {activateList.map((activate) => (
            <div
              key={activate.id}
              className=" md:w-5/6 xl:w-1/3 px-4 
              transition-transform hover:-translate-y-5 duration-300"
            >
              <ActivateSummary activate={activate} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ActivateList;
