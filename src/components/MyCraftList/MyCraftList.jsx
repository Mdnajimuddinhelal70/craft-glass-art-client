import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyCardListItem from "./MyCardListItem";

const MyCraftList = () => {
  const { user } = useContext(AuthContext);
  const [myList, setMyList] = useState([]);
 

  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyList(data);
      });
  }, [user]);

  if (!myList) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-2">
        {myList?.map((item) => (
          <MyCardListItem key={item._id} item={item}></MyCardListItem>
        ))}
      </div>
    </>
  );
};

export default MyCraftList;
