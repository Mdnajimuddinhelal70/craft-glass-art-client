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
      <div className="text-center mt-16 font-bold px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl">Our Clients</h1>
        <p className="mt-4 text-sm sm:text-base lg:text-lg">
          The arts and crafts movement began in the late 19th century in Britain, as a reaction against the industrial revolution and the mass production of goods. It emphasized traditional craftsmanship and the beauty of handmade items.
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-8 gap-4 px-4 sm:px-6 lg:px-8">
        {client.map((item) => (
          <div
            key={item.id} 
            className="bg-neutral text-neutral-content w-full sm:w-80 md:w-96 lg:w-1/4 p-4 rounded-lg shadow-md"
          >
            <div className="text-center">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Client;
