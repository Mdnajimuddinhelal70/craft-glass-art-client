import { FaFacebook, FaGoogle, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <footer className="footer footer-center p-10 bg-black text-white rounded">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold bg-gray-700 rounded-md text-white p-3 inline-block">
            Craft and Arts
          </h1>
          <p className="mt-4 text-gray-300">
            Welcome to Craft and Arts, where we celebrate creativity and
            craftsmanship. Our mission is to bring together artists and
            enthusiasts from around the world to share and appreciate the beauty
            of handmade arts and crafts.
          </p>
          <nav className="mt-4">
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="#about" className="link link-hover">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="link link-hover">
                  Contact
                </a>
              </li>
              <li>
                <a href="#jobs" className="link link-hover">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#press" className="link link-hover">
                  Press Craft
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-4">
            <div className="flex justify-center space-x-4">
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogle className="text-2xl hover:text-red-500 transition duration-200" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-2xl hover:text-red-500 transition duration-200" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-pink-500 transition duration-200" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl hover:text-blue-500 transition duration-200" />
              </a>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-400">
              &copy; 2024 - All rights reserved by Craft and Arts Project
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
