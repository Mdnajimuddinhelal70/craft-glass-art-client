import Client from "../Client/Client";
import Banner from "./Banner";
import Cards from "./Cards";
import Help from "./Help/Help";
import HomeCard from "./HomeCard";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCard></HomeCard>
           <Cards></Cards>
           <Client />
           <Help />
        </div>
    );
};

export default Home;