import { useLoaderData } from "react-router-dom";
import Crafts from "./Crafts";
import { useState } from "react";

const DbCraftCards = () => {
  const loadedCrafts = useLoaderData();
  const [crafts, setCrafts] = useState(loadedCrafts);
  return (
    <>
      <h1>Here are the Items</h1>

      {crafts.length > 0 ? (
        crafts.map((craft) => (
          <Crafts
            key={Math.random}
            craft={craft}
            crafts={crafts}
            setCrafts={setCrafts}
          />
        ))
      ) : (
        <div>
          <h2>There no data found !</h2>
        </div>
      )}
    </>
  );
};

export default DbCraftCards;
