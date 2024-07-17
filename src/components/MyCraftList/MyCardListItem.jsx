import { Link } from "react-router-dom";

const MyCardListItem = ({ item }) => {
    
  const {
    _id,
    image,
    itemName,
    description,
    userName,
    price,
    raiting,
    processingTime,
    subcategoryName,
    stockStatus,
    email,
  } = item;

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card card-side bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        <figure className="w-1/2">
          <img
            className="h-full w-full object-cover"
            src={image}
            alt={itemName}
          />
        </figure>
        <div className="card-body p-6 w-1/2">
          <h1 className="text-2xl font-bold mb-2">{itemName}</h1>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Details</h2>
            <p className="text-gray-600">
              User Name: <span className="font-medium">{userName}</span>
            </p>
            <p className="text-gray-600">
              Price: <span className="font-medium">${price}</span>
            </p>
            <p className="text-gray-600">
              Rating: <span className="font-medium">{raiting}</span>
            </p>
            <p className="text-gray-600">
              Processing Time:{" "}
              <span className="font-medium">{processingTime}</span>
            </p>
            <p className="text-gray-600">
              Category: <span className="font-medium">{subcategoryName}</span>
            </p>
            <p className="text-gray-600">
              Stock Status: <span className="font-medium">{stockStatus}</span>
            </p>
            <p className="text-gray-600">
              Email: <span className="font-medium">{email}</span>
            </p>
            <div>
              <Link to={`/myLitsUpdate/${_id}`}>
                {" "}
                <button className="btn btn-accent">Update</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-circle"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCardListItem;
