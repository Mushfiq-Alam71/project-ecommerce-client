import Banner from "../../Components/Banner/Banner";
import ExclusiveDeals from "../../Components/Exclusive Deals/ExclusiveDeals";
import PopularCategory from "../../Components/Popular Category/PopularCategory";
import PopularRestaurants from "../../Components/Popular Restaurants/PopularRestaurants";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <ExclusiveDeals></ExclusiveDeals>
         <PopularCategory></PopularCategory>
         <PopularRestaurants></PopularRestaurants>
      </div>
   );
};

export default Home;