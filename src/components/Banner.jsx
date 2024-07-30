import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Banner = () => {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "600px",
  };

  const slideImages = [
    {
      url: "https://i.ibb.co/b3yrSMX/craftB6.jpg",
      caption: "Discover the intricate world of weaving, where threads are interlaced to create beautiful and durable fabrics. Each piece tells a story of tradition and craftsmanship.",
    },
    {
      url: "https://i.ibb.co/VTtJjjF/craftB4.jpg",
      caption: "Explore the art of woodworking, where skilled hands transform raw timber into functional and decorative objects. This timeless craft blends creativity with precision.",
    },
    {
      url: "https://i.ibb.co/2kd6Yzj/dxkok.jpg",
      caption: "Immerse yourself in the delicate process of textile creation. From tapestry to twill, these techniques showcase the artistry and dedication of master weavers.",
    },
  ];

  return (
    <div className="slide-container mt-20">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
              }}
            >
              <span className="bg-slate-500 bg-opacity-50 text-white text-center p-5 rounded">
                <h2 className="text-2xl font-bold">Crafts and Arts</h2>
                <p className="mt-2">{slideImage.caption}</p>
              </span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Banner;
