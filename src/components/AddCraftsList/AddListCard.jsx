import { Link } from "react-router-dom";

const AddListCard = ({ craft, index }) => {
  const {_id, image, itemName, price } = craft;
  return (
    <div className="flex justify-center my-4">
      <table className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2"></th>
            <th className="px-4 py-2">Item</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center items-center border-b border-gray-200">
            <td className="px-4 py-2">{index + 1}</td>
            <td className="px-4 py-2">
              <div className="flex items-center justify-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img src={image} alt={itemName} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{itemName}</div>
                </div>
              </div>
            </td>
            <td className="px-4 py-2">Price: {price}</td>
            <td className="px-4 py-2">
              <Link to={`/addListDetails/${_id}`}>
                <button className="btn btn-ghost btn-md">Details</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AddListCard;
