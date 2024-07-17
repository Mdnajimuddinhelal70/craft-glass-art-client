import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Banner = () => {
  const spanStyle = {
    padding: "40px",
    background: "#efefef",
    color: "#000000",
  };

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
      caption:
        "The process of creating fabric by interlacing threads on a loom. Techniques include tapestry weaving, plain weave, and twill.",
    },
    {
      url: "https://i.ibb.co/VTtJjjF/craftB4.jpg",
      caption:
        "Crafting items from wood, using techniques like carving, joinery, and turning. Common items include furniture, toys, and decorative objects.",
    },
    {
      url: "https://i.ibb.co/2kd6Yzj/dxkok.jpg",
      caption:
        "The process of creating fabric by interlacing threads on a loom. Techniques include tapestry weaving, plain weave, and twill.",
    },
  ];
  return (
    <>
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
                <span className="bg-slate-500">
                 
                </span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};

export default Banner;
