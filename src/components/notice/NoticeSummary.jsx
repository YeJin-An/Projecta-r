import { Link } from 'react-router-dom';

function NoticeSummary({ notice, author }) {
  return (
    <>
      <div className="flex place-content-around gap-4 break-normal">
        <Link className="ml-3" to={`/notice/${notice.id}/`}>
          {notice.id}
        </Link>

        <div className="mr-3  text-ellipsis overflow-hidden">
          <Link to={`/notice/${notice.id}/`}>{notice.title}</Link>
        </div>

        <Link className="mr-3" to={`/notice/${notice.id}/`}>
          <div>{notice.author.username}</div>
        </Link>
        <Link className="mr-1" to={`/notice/${notice.id}/`}>
          {notice.created_at}
        </Link>
      </div>

      <hr className="text-blank-400 border-b-2 border-300 mb-1 mt-1" />
    </>
  );
}

export default NoticeSummary;
