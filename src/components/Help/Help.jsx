import { Link } from "react-router-dom";

const Help = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="text-center mt-10">
          <h1 className="text-5xl">We love to help. Seriously</h1>
          <p className="mt-4">
            Still not sure what you need? We’re happy to help, even if you’re
            not a customer. Contact us and we'll chat — or get back to you as
            soon as we can.
          </p>
        </div>
        <div className="mt-10">
          <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img src="https://i.ibb.co/2kd6Yzj/dxkok.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Hi !</h2>
              <p>Do you need any help for knowing how to create and deisgn?</p>
              <div className="card-actions justify-end">
                <Link to="/help">
                  <button className="btn btn-active">Help</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
