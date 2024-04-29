import Swal from 'sweetalert2'

const CraftForm = () => {

    const handleCraft = e => {
        e.preventDefault();
        const image = e.target.image.value;
        const itemName = e.target.itemName.value;
        const subcategoryName = e.target.subcategoryName.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const processingTime = e.target.processingTime.value;
        const newCraft = {image, itemName, subcategoryName, price,rating,processingTime, description}
        console.log(newCraft)

    //   data sending from server
      fetch('http://localhost:5001/craft', {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newCraft)
      })
      .then(res => res.json())
      .then(data => {
      
        if(data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'User added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
    }

    return (
        <div className="mt-20 mx-auto max-w-md ">
            <h1 className="text-3xl font-semibold text-center">Add Your craft items</h1>
            <hr />
        <form onSubmit={handleCraft} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="grid gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Image URL:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="image" required placeholder="Image URL" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Item Name:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="itemName" required placeholder="Item Name" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Subcategory Name:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="subcategoryName" required placeholder="Subcategory Name" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="description" placeholder="Description"></textarea>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="price" required placeholder="Price" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Rating:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="rating" required placeholder="Rating" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Customization:</label>
              <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="customization">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Processing Time:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="processingTime" required placeholder="Processing Time" />
            </div>
            <button className="bg-pink-500 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
          </div>
        </form>
      </div>
      
    );
};

export default CraftForm;