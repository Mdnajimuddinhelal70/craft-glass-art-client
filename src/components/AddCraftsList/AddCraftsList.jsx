import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AddListCard from "./AddListCard";


const AddCraftsList = () => {
  const { user } = useContext(AuthContext) || {};
  const [craftList, setCraftList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/craftList/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCraftList(data);
          console.log(data);
        });
  }, [user]);

  return (
    <div className="mt-20 mb-20">
      {craftList.map((craft, index) => (
        <AddListCard key={craft._id} craft={craft} index={index} />
      ))}
    </div>
  );
};

export default AddCraftsList;
