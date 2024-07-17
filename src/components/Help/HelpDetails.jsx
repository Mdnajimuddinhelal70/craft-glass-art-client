import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const HelpDetails = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-around mt-16 md:mt-32 text-center">
        <h2 className="text-3xl md:text-5xl text-pink-600 mb-4 md:mb-0">
          Thank You Dear, {user.displayName}
        </h2>
        <img className="rounded-full w-32 h-32 md:w-48 md:h-48" src={user.photoURL} alt="" />
      </div>
      <div className="bg-green-400 p-8 md:p-10 mt-10 md:mt-20 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-5xl p-2 md:p-5 text-white">How to create Paper and Glass design</h1>
        <p className="text-white text-lg md:text-xl leading-relaxed">
          Creating art, craft, and glass designs involves a blend of creativity, skill, and knowledge of various techniques. Begin by gathering inspiration and sketching initial ideas, focusing on the themes, patterns, or styles you wish to explore. For arts and crafts, choose your materials—whether they be textiles, wood, metal, or clay—and employ techniques like carving, weaving, or embroidery to bring your vision to life. In glass design, start with selecting the type of glass and method—such as stained glass, blown glass, or fused glass. Precision is key in cutting, shaping, and assembling glass pieces, often requiring tools like glass cutters, kilns, and blowpipes. Pay attention to color harmony and texture to enhance the aesthetic appeal of your work. Continuous experimentation and refinement of techniques are essential, as is learning from other artists and craftsmen. The integration of traditional craftsmanship with contemporary design can result in unique, beautiful pieces that reflect both heritage and innovation.
        </p>
      </div>
    </>
  );
};

export default HelpDetails;
