import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyCardListItem from "./MyCardListItem";

const MyCraftList = () => {
  const { user } = useContext(AuthContext);
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    fetch(`https://b9-a10-asmnt-server.vercel.app/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyList(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    setMyList(myList.filter((item) => item._id !== id));
  };

  if (!myList.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-2">
        {myList.map((item) => (
          <MyCardListItem
            key={item._id}
            item={item}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default MyCraftList;
