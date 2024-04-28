import banner from "../../public/bannerImg.jpg"

const Banner = () => {
    return (
        <>
        <div className="max-w-screen-2xl container max-auto md:px-20 px-4 flex flex-col md:flex-row gap-7 my-10">
            <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
               <div className="space-y-12">
               <h1 className="text-4xl font-bold">Paper crafts encompass a wide range of <span className="text-pink-700">techniques</span></h1>
                <p className="text-xl">Glass art, on the other hand, involves working with molten glass to create stunning sculptures, vessels, and decorative objects. Glassblowing is perhaps the most well-known form of glass art, requiring skill, precision, and a deep understanding of the properties of glass. </p>
               </div>
            </div>
            <div  className="w-full order-1 md:w-1/2">
                <img src={banner} className="w-88 h-92 mt-12 rounded-lg md:mt-32" alt="" />
            </div>
        </div>
        </>
    );
};

export default Banner;






// // carft imag
// https://i.ibb.co/zbJHS75/top-view-christmas-gift-with-tree-decorations.jpg
// https://i.ibb.co/SyTZzXB/top-view-essentials-crafting-christmas-gift-with-scissors.jpg
// https://i.ibb.co/rtMHVcn/top-view-origami-craft-paint-tube-paintbrush-straw-colored-paper.jpg

// // glass imag
// https://i.ibb.co/990N2SF/pexels-sohelpatel-1804035.jpg
// https://i.ibb.co/n7pHKZr/pexels-stephanthem-928854.jpg
// https://i.ibb.co/SXzM1Kd/images-1.jpg
// //paper craft
// Origami
// Papercutting
// Quilling

// //Glassblowing
// Stained glass
// Fused glass art