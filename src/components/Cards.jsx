import { useEffect, useState } from "react";
import CraftCards from "./CraftCards";


const Cards = () => {
   
    const [crafts, setCrafts] = useState([])

    useEffect(() => {
     fetch('craftCard.json')
     .then(res => res.json())
     .then(data => setCrafts(data))
    }, [])
 
    return (
        
        <div>
        {
            crafts.map(craft => <CraftCards key={Math.random} craft={craft}></CraftCards>)
        }
        </div>
       
    );
};

export default Cards;