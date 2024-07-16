const AddListCard = ({ craft }) => {
  const { image, itemName, price, rating, customization, stockStatus } = craft;
  return (
    <div className="max-w-xs mx-auto bg-white shadow-xl rounded-lg overflow-hidden mt-16 mb-8">
      <figure className="flex justify-center bg-gray-100">
        <img src={image} alt={itemName} className="w-full object-cover h-48" />
      </figure>
      <div className="p-4">
        <h2 className="text-lg font-bold">Item Name: {itemName}</h2>
        <h3 className="text-md text-gray-700">Price: ${price}</h3>
        <h3 className="text-md text-gray-700">Rating: {rating}</h3>
        <p className="text-sm text-gray-500">Customization: {customization}</p>
        <p className="text-sm text-gray-500">Stock Status: {stockStatus}</p>
        <div className="mt-4 text-right">
          <button className="px-4 py-2 bg-pink-500 text-white text-sm font-medium rounded hover:bg-fuchsia-400">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddListCard;
