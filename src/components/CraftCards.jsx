import { Link } from "react-router-dom";


const CraftCards = ({craft}) => {
    const {id, image, name, title, price, category, description} = craft;
    return (
            <div className="card card-side bg-base-100 lg:shadow-xl w-full sm:w-2/3 lg:w-2/2 mb-6 xl:w-1/3 mx-auto">
         <div className="hero-content flex-col lg:flex-row">
        <img className="max-w-sm rounded-lg shadow-2xl" src={image} />
        <div>
        <h1 className="text-5xl font-bold">{name}</h1>
        <p className="py-6">{title}</p>
        <p>{description}</p>
        <h3>{category}</h3>
        <h4>{price}</h4>
        
       <Link to={`/craft/${id}`}>
       <button className="btn btn-primary">View Details</button>
       </Link>
        </div>
    </div>
    </div>
    );
};

export default CraftCards;