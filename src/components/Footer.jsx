import { FaFacebook, FaGoogle, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
       <div>
       
        <hr />
         <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
         <h1 className="text-xl font-bold bg-gray-500 rounded-md text-white p-3">Art and Crafts</h1>
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press Craft</a>
        </nav> 
        <nav>
          <div className="grid grid-flow-col gap-4">
           <FaGoogle className="text-2xl"></FaGoogle>
           <FaYoutube className="text-2xl"></FaYoutube>
           <FaInstagram className="text-2xl"></FaInstagram>
           <FaFacebook className="text-2xl"></FaFacebook>
          </div>
        </nav> 
        <aside>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
       </div>
    );
};

export default Footer;