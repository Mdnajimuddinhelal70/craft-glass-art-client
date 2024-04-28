import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const crafts = useLoaderData()
    const {id} = useParams();
    const idInt = parseInt(id);
    const craft = crafts?.find(card => card.id === idInt) || null;
    console.log(craft)
    return (
       <>
        <div className="mt-32 ml-52 mb-5">
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={craft.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{craft.name}</h2>
          <h3 className="font-bold">The ID of your selected craft card: {craft.id}</h3>
          <p>{craft.description}</p>
           <p>And the price for you {craft.price}</p>
        </div>
      </div>
        </div>
       </>
    );
};

export default CardDetails;