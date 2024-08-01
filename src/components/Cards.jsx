import { useEffect, useState } from "react";
import CraftCards from "./CraftCards";

const Cards = () => {
  const [crafts, setCrafts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/crafts')
      .then(res => res.json())
      .then(data => {
        setCrafts(data);
        console.log(data); 
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="md:grid grid-cols-3">
      {crafts?.map(craft => (
        <CraftCards key={craft._id} craft={craft} />
      ))}
    </div>
  );
};

export default Cards;
