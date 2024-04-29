import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Crafts = ({craft, crafts, setCrafts}) => {
    const {_id, image, itemName, subcategoryName, price,rating,processingTime, description} = craft;
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "Are you want to sure to delete !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             

              fetch(`http://localhost:5001/craft/${_id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your craft has been deleted.",
                        icon: "success"
                      });
                      const remaining = crafts.filter(crf => crf._id !== _id);
                      setCrafts(remaining);
                }
              })
            }
          });
    }
    return (
        <div className="flex flex-col mt-32 sm:flex-row gap-4 sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto">
        <div className="mt-8 sm:mt-0">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img className="w-full h-48 object-cover" src={image} alt="Movie"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{itemName}</h2>
                    <p>{description}</p>
                    <h3>{subcategoryName}</h3>
                    <h4>{price}</h4>
                    <h4>{rating}</h4>
                    <h4>{processingTime}</h4>
                    <div className="card-actions justify-end">
                       <Link to={`/updateCraft/${_id}`}>
                       <button className="px-2 py-1 rounded-lg bg-green-600">Update</button>
                       </Link>
                        <button
                        onClick={() => handleDelete(_id)}
                        className="px-2 py-1 rounded-lg bg-red-600">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    );
};

export default Crafts;