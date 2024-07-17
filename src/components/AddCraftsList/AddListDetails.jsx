import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AddListDetails = () => {
  const { id } = useParams();
  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/formDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCardDetails(data);
      });
  }, [id]);

  if (!cardDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card card-side bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        <figure className="w-1/2">
          <img className="h-full w-full object-cover" src={cardDetails.image} alt={cardDetails.itemName} />
        </figure>
        <div className="card-body p-6 w-1/2">
          <h1 className="text-2xl font-bold mb-2">{cardDetails.itemName}</h1>
          <p className="text-gray-700 mb-4">{cardDetails.description}</p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Details</h2>
            <p className="text-gray-600">User Name: <span className="font-medium">{cardDetails.userName}</span></p>
            <p className="text-gray-600">Price: <span className="font-medium">${cardDetails.price}</span></p>
            <p className="text-gray-600">Rating: <span className="font-medium">{cardDetails.raiting}</span></p>
            <p className="text-gray-600">Processing Time: <span className="font-medium">{cardDetails.processingTime}</span></p>
            <p className="text-gray-600">Category: <span className="font-medium">{cardDetails.subcategoryName}</span></p>
            <p className="text-gray-600">Stock Status: <span className="font-medium">{cardDetails.stockStatus}</span></p>
            <p className="text-gray-600">Email: <span className="font-medium">{cardDetails.email}</span></p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddListDetails;
