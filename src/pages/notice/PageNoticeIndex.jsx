import NoticeList from 'components/notice/NoticeList';
import { Link } from 'react-router-dom';
import image01 from 'icon/image01.png';

function PageNoticeIndex() {
  return (
    <div>
      <hr className="text-blank-400 border-b-2 border-300" />
      <h5>탄소 중립 실천 릴레이</h5>
      <img className="mt-3 ml-3" src={image01} alt="image01"></img>
      <div>
        <NoticeList />
      </div>

      <hr className="text-blank-400 border-b-2 border-300" />

      <div className="flex gap-4">
        <Link to="/notice/new/" className="ml-auto mt-2 mb-2 mt-1 mr-6">
          글쓰기
        </Link>
      </div>
    </div>
  );
}

export default PageNoticeIndex;
