import { Link } from "react-router-dom";

const CraftCards = ({ craft }) => {
  const { _id, image, name, title, price, category, description } = craft;
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-screen-xl mx-auto">
          <div className="card bg-base-100 w-full md:w-96 shadow-xl rounded-lg overflow-hidden">
            <figure>
              <img className="w-full" src={image} alt="Shoes" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-xl font-bold mb-2">{name}</h2>
              <p className="text-gray-600">{description}</p>
              <div className="card-actions flex justify-end mt-4">
                <Link to={`/productDetails/${_id}`}>
                  <button className="btn btn-outline border-0 border-b-8 px-4 py-2">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CraftCards;
