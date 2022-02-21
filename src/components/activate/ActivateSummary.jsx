import { Link } from 'react-router-dom';

function ActivateSummary({ activate }) {
  return (
    <div className="bg-gray-100 border-gray-100 border-2 rounded-lg overflow-hidden mb-10">
      {activate.photo && (
        <img src={activate.photo} alt={activate.title} className="w-full" />
      )}
      <div className="p-8 sm:p-9 md:p-7 xl:p-9">
        <h3>
          <Link
            to={`/news/${activate.id}/`}
            className="font-semibold text-dark"
          >
            {activate.title}
          </Link>
        </h3>
        <p>by {activate.author.username}</p>
      </div>
    </div>
  );
}

export default ActivateSummary;
