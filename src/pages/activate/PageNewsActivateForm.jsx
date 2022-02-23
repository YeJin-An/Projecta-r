import { useNavigate, useParams } from 'react-router-dom';
import ActivateForm from 'components/activate/ActivateForm';

function PageNewsActivateForm() {
  const navigate = useNavigate();

  const { activateId } = useParams();

  return (
    <ActivateForm
      activateid={activateId}
      handleDidSave={(savedActivate) =>
        navigate(`/activate/${savedActivate.id}/`)
      }
    />
  );
}

export default PageNewsActivateForm;
