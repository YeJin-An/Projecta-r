import { Link } from 'react-router-dom';

function NoticeSummary({ notice }) {
  return (
    <>
      <div className="flex place-content-around gap-4 break-normal">
        <Link to={`/notice/${notice.id}/`}>{notice.id}</Link>

        <div className="text-ellipsis overflow-hidden">
          <Link to={`/notice/${notice.id}/`}>{notice.title}</Link>
        </div>

        <Link to={`/notice/${notice.id}/`}>{notice.author}</Link>
        <Link to={`/notice/${notice.id}/`}>{notice.created_at}</Link>
      </div>

      <hr className="text-blank-400 border-b-2 border-300 mb-1 mt-1" />
    </>
  );
}

export default NoticeSummary;
