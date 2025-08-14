import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import PromoBar from '../Components/PromoBar/PromoBar';

const Main = () => {
   return (
      <div>
         <PromoBar></PromoBar>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Main;