import { useEffect, useState } from "react";

const Client = () => {
  const [client, setClient] = useState([]);

  useEffect(() => {
    fetch("client.json")
      .then((res) => res.json())
      .then((data) => {
        setClient(data);
      });
  }, []);
  return (
    <>
    <div className="text-center mt-16 font-bold">
        <h1 className="text-2xl">Our client</h1>
        <p>The arts and crafts movement began in the late 19th century in Britain, as a reaction against the industrial revolution and the mass production of goods. It emphasized traditional craftsmanship and the beauty of handmade items.</p>
    </div>
      <div className="grid grid-cols-3">
        {client.map((item) => (
          <div
            key={Math.random}
            className="card bg-neutral text-neutral-content w-96"
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}!</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Client;
