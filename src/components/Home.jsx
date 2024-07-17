import Client from "../Client/Client";
import Banner from "./Banner";
import Cards from "./Cards";
import HomeCard from "./HomeCard";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCard></HomeCard>
           <Cards></Cards>
           <Client />
        </div>
    );
};

export default Home;