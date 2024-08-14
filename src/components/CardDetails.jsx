import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  const [craftDetails, setCraftDetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/productDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCraftDetails(data);
      });
  }, [id]);

  if (!CardDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center mt-16 mb-8">
      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <img
            className="max-w-sm rounded-lg shadow-2xl"
            src={craftDetails.image}
            alt={craftDetails.name}
          />
          <h1 className="text-3xl font-bold text-gray-700">
            {craftDetails.name}
          </h1>
          <p className="mt-2 text-gray-500">{craftDetails.title}</p>
          <p className="mt-2 text-gray-500">{craftDetails.description}</p>
          <h3 className="mt-2 text-gray-500">{craftDetails.category}</h3>
          <h4 className="mt-2 text-gray-500">{craftDetails.price}</h4>
        </div>
        <h2>Do want to add arts and craft Items? <Link to='/craftItem'>
         <button className="btn btn-secondary">Go Nwo</button>
        </Link></h2>
      </div>
    </div>
  );
};

export default CardDetails;
