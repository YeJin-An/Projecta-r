import NoticeList from 'components/notice/NoticeList';
import { Link } from 'react-router-dom';
import image01 from 'icon/image01.png';

function PageNoticeIndex() {
  return (
    <div>
      <h2 className="text-blank-400 border-b-2 border-300"></h2>
      <h5>탄소 중립 실천 릴레이</h5>
      <img className="mt-3 ml-3" src={image01} alt="image01"></img>
      <div>
        <NoticeList />
      </div>
      <hr className="my-5" />
      <div className="flex gap-4">
        <Link to="/notice/new/">글쓰기</Link>
      </div>
    </div>
  );
}

export default PageNoticeIndex;
