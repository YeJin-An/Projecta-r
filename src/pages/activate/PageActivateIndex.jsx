// 뉴스 서비스의 대문 페이지

import ActivateList from 'components/activate/ActivateList';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

function PageActivateIndex() {
  const navigate = useNavigate();

  return (
    <div>
      <hr className="text-blank-400 border-b-2 border-300" />
      <h2>탄소 중립 실천 릴레이 현황</h2>
      <ActivateList />

      <hr className="text-blank-400 border-b-2 border-300" />

      <div className="flex items-center justify-end">
        <Button onClick={() => navigate('/activate/new/')}>글쓰기</Button>
      </div>
    </div>
  );
}

export default PageActivateIndex;
