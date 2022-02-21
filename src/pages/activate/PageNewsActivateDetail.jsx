import { useParams } from 'react-router-dom';
import ActivateDetail from 'components/activate/ActivateDetail';

function PageNewsActivateDetail() {
  const { activateId } = useParams();

  return (
    <div>
      <h2>타노 중립 릴레이 현황#{activateId} 보여주기</h2>
      <ActivateDetail activateId={activateId} />
    </div>
  );
}

export default PageNewsActivateDetail;
