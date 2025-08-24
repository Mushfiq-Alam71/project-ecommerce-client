import Banner from "../../Components/Banner/Banner";
import ExclusiveDeals from "../../Components/Exclusive Deals/ExclusiveDeals";
import PopularCategory from "../../Components/Popular Category/PopularCategory";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <ExclusiveDeals></ExclusiveDeals>
         <PopularCategory></PopularCategory>
      </div>
   );
};

export default Home;