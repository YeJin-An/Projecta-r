// 뉴스 서비스의 대문 페이지

import Button from 'components/Button';
import ActivateList from 'components/activate/ActivateList';
import { useNavigate } from 'react-router-dom';

function PageNewsIndex() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>탄소 중립 실천 릴레이 현황</h2>
      <ActivateList />

      <Button onClick={() => navigate('/activate/new/')}>글쓰기</Button>
    </div>
  );
}

export default PageNewsIndex;
