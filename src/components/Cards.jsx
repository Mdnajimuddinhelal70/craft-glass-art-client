import { useEffect, useState } from "react";
import CraftCards from "./CraftCards";
import { data } from 'autoprefixer';


const Cards = () => {
   
    const [crafts, setCrafts] = useState([])

    useEffect(() => {
     fetch('http://localhost:5000/crafts')
     .then(res => res.json())
     .then(data => setCrafts(data))
     console.log(data)
    }, [])
 
    return (
        
        <div className="md:grid grid-cols-3">
        {
            crafts?.map(craft => <CraftCards
                 key={Math.random} 
                 craft={craft}              
                 ></CraftCards>)
        }
        </div>
       
    );
};

export default Cards;