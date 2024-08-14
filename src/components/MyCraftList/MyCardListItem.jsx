import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyCardListItem = ({ item, onDelete }) => {
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

  const handleDelete = (id, event) => {
    event.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b9-a10-asmnt-server.vercel.app/deleteCraft/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your craft has been deleted.",
                icon: "success",
              });
             
              onDelete(id); // Notify parent about the deletion
            } else {
              Swal.fire({
                title: "Error!",
                text: "Something went wrong.",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-6 mt-16">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-sm">
        <figure className="w-full">
          <img
            className="h-32 w-full object-cover"
            src={image}
            alt={itemName}
          />
        </figure>
        <div className="p-3">
          <h1 className="text-lg font-bold mb-2 text-gray-800">{itemName}</h1>
          <p className="text-gray-700 mb-2 text-sm">{description}</p>
          <div className="mb-2 text-sm">
            <h2 className="text-md font-semibold text-gray-700">Details</h2>
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
              Processing Time: <span className="font-medium">{processingTime}</span>
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
          </div>
          <div className="flex space-x-2 justify-between text-sm">
            <Link to={`/myLitsUpdate/${_id}`}>
              <button className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600 transition duration-200">
                Update
              </button>
            </Link>
            <button
              onClick={(event) => handleDelete(_id, event)}
              className="border border-red-500 text-red-500 py-1 px-2 rounded-lg hover:bg-red-500 hover:text-white transition duration-200"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCardListItem;
