import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider/AuthProvider";

const CraftForm = () => {
  const { user } = useContext(AuthContext) || {};
  const handleCraft = (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const itemName = e.target.itemName.value;
    const subcategoryName = e.target.subcategoryName.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const description = e.target.description.value;
    const customization = e.target.customization.value;
    const processingTime = e.target.processingTime.value;
    const stockStatus = e.target.stockStatus.value;
    const userName = e.target.userName.value;
    const email = user.email;
    const newCraft = {
      image,
      itemName,
      subcategoryName,
      price,
      rating,
      description,
      customization,
      processingTime,
      stockStatus,
      userName,
      email,
    };
    console.log(newCraft);

    
    fetch(
      "http://localhost:5000/formProduct",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCraft),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Craft item added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="mt-20 mx-auto max-w-3xl">
      <h1 className="text-3xl font-semibold text-center mb-10">
        Add Your Craft Items
      </h1>
      <hr />
      <form
        onSubmit={handleCraft}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image URL:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="image"
              required
              placeholder="Image URL"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Item Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="itemName"
              required
              placeholder="Item Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Subcategory Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="subcategoryName"
              required
              placeholder="Subcategory Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="description"
              placeholder="Description"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Price:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="price"
              required
              placeholder="Price"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Rating:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="rating"
              required
              placeholder="Rating"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Customization:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="customization"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Processing Time:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="processingTime"
              required
              placeholder="Processing Time"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Stock Status:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="stockStatus"
              required
            >
              <option value="inStock">In Stock</option>
              <option value="madeToOrder">Made to Order</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              User Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="userName"
              required
              placeholder="User Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              User Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="userEmail"
              value={user?.email}
              readOnly
              placeholder="User Email"
            />
          </div>
          <div className="md:col-span-2 text-center">
            <button
              className="bg-pink-500 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CraftForm;
