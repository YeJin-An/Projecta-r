import NoticeList from 'components/notice/NoticeList';
import { Link } from 'react-router-dom';
import image01 from 'icon/image01.png';
import NoticeTable from './NoticeTable';
import ReactPaginate from 'react-paginate';
import Button from 'components/Button';

export default function PageNoticeIndex() {
  return (
    <div>
      <hr className="text-blank-400 border-b-2 border-300" />
      <h5>공지사항</h5>
      <img className="m-8" src={image01} alt="image01"></img>
      <div>
        <NoticeTable />
        <NoticeList />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        pageRangeDisplayed={5}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="flex"
      />
      <hr className="text-blank-400 border-b-2 border-300" />

      <div className="flex gap-4">
        <Link to="/notice/new/" className="ml-auto mt-1 mr-6">
          <Button>글쓰기</Button>
        </Link>
      </div>
    </div>
  );
}
