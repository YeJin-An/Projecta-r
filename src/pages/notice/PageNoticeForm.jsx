import { useNavigate, useParams } from 'react-router-dom';
import NoticeForm from 'components/notice/NoticeForm';

function PageNoticeForm() {
  const { noticeId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-3xl mt-10 mb-5">
        공지사항 {!noticeId ? '쓰기' : '수정'}
      </h2>
      <NoticeForm
        noticeId={noticeId}
        handleSuccess={(notice) => navigate(`/notice/${notice.id}/`)}
      />
    </div>
  );
}

export default PageNoticeForm;
