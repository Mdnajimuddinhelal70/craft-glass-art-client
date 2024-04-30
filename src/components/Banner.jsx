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





