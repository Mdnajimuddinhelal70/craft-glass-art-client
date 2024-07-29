import { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";


const UpdateCraftForm = () => {
    const {id} = useParams();
  const { user } = useContext(AuthContext) || {};
  const [formUodate, setFormUpdate] = useState({});


  useEffect(() => {
  
    fetch(`http://localhost:5000/formUpdate/${id}`)
      .then((res) => res.json())
      .then((data) => setFormUpdate(data));
  }, [id]);

  const handleUpdateCraft = (e) => {
    e.preventDefault();
    const updatedCraft = {
      image: e.target.image.value,
      itemName: e.target.itemName.value,
      subcategoryName: e.target.subcategoryName.value,
      price: e.target.price.value,
      rating: e.target.rating.value,
      description: e.target.description.value,
      customization: e.target.customization.value,
      processingTime: e.target.processingTime.value,
      stockStatus: e.target.stockStatus.value,
      userName: e.target.userName.value,
      email: user.email,
    };
    console.log(updatedCraft);

   
    fetch(`http://localhost:5000/formProductUpdate/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Craft item updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="mt-20 mx-auto max-w-3xl">
      <h1 className="text-3xl font-semibold text-center">
        Update Your Craft Items
      </h1>
      <hr />
      <form
        onSubmit={handleUpdateCraft}
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
              defaultValue={formUodate.image}
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
              defaultValue={formUodate.itemName}
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
              defaultValue={formUodate.subcategoryName}
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
              defaultValue={formUodate.description}
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
              defaultValue={formUodate.price}
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
              defaultValue={formUodate.rating}
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
              defaultValue={formUodate.customization}
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
              defaultValue={formUodate.processingTime}
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
              defaultValue={formUodate.stockStatus}
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
              defaultValue={formUodate.userName}
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
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCraftForm;
