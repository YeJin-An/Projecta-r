import { Link } from 'react-router-dom';

function ActivateSummary({ activate }) {
  return (
    <div className="bg-violet-100 Sborder rounded mb-3">
      {activate.photo && (
        <img src={activate.photo} alt={activate.title} className="w-full" />
      )}
      <div className="p-8 sm:p-7 md:p-4 xl:p-7">
        <h3>
          <Link to={`/activate/${activate.id}/`} l className="font-semibold">
            {activate.title}
          </Link>
        </h3>
        <p className="font-light">by {activate.author.username}</p>
      </div>
    </div>
  );
}

export default ActivateSummary;
