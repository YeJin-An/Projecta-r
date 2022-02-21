import { Link } from 'react-router-dom';

function NoticeSummary({ notice }) {
  return (
    <div>
      <Link to={`/notice/${notice.id}/`}>{notice.title}</Link>
    </div>
  );
}

export default NoticeSummary;
