import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const CardDetails = () => {
  const { id } = useParams();
  const [craft, setCraft] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/crafts/${id}`)
      .then(res => res.json())
      .then(data => setCraft(data));
  }, [id]);

  if (!craft) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-200">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <img className="max-w-sm rounded-lg shadow-2xl" src={craft.image} alt={craft.name} />
          <h1 className="text-3xl font-bold text-gray-700">{craft.name}</h1>
          <p className="mt-2 text-gray-500">{craft.title}</p>
          <p className="mt-2 text-gray-500">{craft.description}</p>
          <h3 className="mt-2 text-gray-500">{craft.category}</h3>
          <h4 className="mt-2 text-gray-500">{craft.price}</h4>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;