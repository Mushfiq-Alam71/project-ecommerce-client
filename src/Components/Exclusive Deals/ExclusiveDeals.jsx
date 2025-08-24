import { NavLink } from "react-router";
import chefBurger from '../../assets/imgs/exclusive-deals/chef-burger.webp';
import chefSalad from '../../assets/imgs/exclusive-deals/chef-fresh-salad.webp';
import chefFastFood from '../../assets/imgs/exclusive-deals/chef-fastfood.webp';

const ExclusiveDeals = () => {
   return (
      <div className="my-8">
         {/* simple text and little nav menu */}
         <div className="flex flex-row justify-between">
            <div>
               <p className="font-bold text-3xl">Up to <span className="text-[#fc8a06]">-40%</span> Order.uk exlusive deals</p>
            </div>
            <div>
               {['Vegan', 'Sushi', 'Pizza', 'Fast Food', 'Others'].map((item) => (
                  <NavLink
                     key={item}
                     to={`/${item.toLowerCase().replace(' ', '-')}`}
                     className={({ isActive }) => `px-8 py-2 rounded-4xl inline-flex items-center font-semibold text-lg  ${isActive
                        ? 'border-2 border-[#fc8a06] text-[#fc8a06]'
                        : 'text black hover:text-[#fc8a06] underline'
                        }`}
                  >
                     {item}
                  </NavLink>
               ))}
            </div>
         </div>
         {/* food items menu card */}
         <div className="my-8 flex flex-row justify-between">
            {/* card 1 */}
            <div className="relative">
               {/* Gradient Overlay Container */}
               <div className="absolute inset-0 w-[496px] bg-gradient-to-bl from-white/0 via-[#03081F]/20 to-[#03081F] z-1 rounded-xl"></div>
               {/* Text Overlay - Highest z-index */}
               <div className="absolute bottom-6 left-6 z-20 p-4 flex flex-col">
                  <h2 className="text-[#fc8a06] text-xl">Restaurant</h2>
                  <h2 className="text-white text-3xl font-bold text-center">Chef Burgers London</h2>
               </div>
               <div className="absolute top-0 right-5 z-20 flex flex-col">
                  <h2 className="text-white pl-[17px] pb-[18px] pr-[20px] pt-[21px] text-lg font-extrabold bg-[#03081F] rounded-b-2xl"> -40%</h2>
               </div>
               {/* Image */}
               <img src={chefSalad} className="w-[496px] relative z-0" alt="Chef preparing burger" />
            </div>
            <div className="relative">
               {/* Gradient Overlay Container */}
               <div className="absolute inset-0 w-[496px] bg-gradient-to-bl from-white/0 via-[#03081F]/20 to-[#03081F] z-1 rounded-xl"></div>
               {/* Text Overlay - Highest z-index */}
               <div className="absolute bottom-6 left-6 z-20 p-4 flex flex-col">
                  <h2 className="text-[#fc8a06] text-xl">Restaurant</h2>
                  <h2 className="text-white text-3xl font-bold text-center">Chef Special Fresh Salad</h2>
               </div>
               <div className="absolute top-0 right-5 z-20 flex flex-col">
                  <h2 className="text-white pl-[17px] pb-[18px] pr-[20px] pt-[21px] text-lg font-extrabold bg-[#03081F] rounded-b-2xl"> -20%</h2>
               </div>
               {/* Image */}
               <img src={chefBurger} className="w-[496px] relative z-0" alt="Chef preparing burger" />
            </div>
            <div className="relative">
               {/* Gradient Overlay Container */}
               <div className="absolute inset-0 w-[496px] bg-gradient-to-bl from-white/0 via-[#03081F]/20 to-[#03081F] z-1 rounded-xl"></div>
               {/* Text Overlay - Highest z-index */}
               <div className="absolute bottom-6 left-6 z-20 p-4 flex flex-col">
                  <h2 className="text-[#fc8a06] text-xl">Restaurant</h2>
                  <h2 className="text-white text-3xl font-bold text-center">Chef Burgers London</h2>
               </div>
               <div className="absolute top-0 right-5 z-20 flex flex-col">
                  <h2 className="text-white pl-[17px] pb-[18px] pr-[20px] pt-[21px] text-lg font-extrabold bg-[#03081F] rounded-b-2xl">-17%</h2>
               </div>
               {/* Image */}
               <img src={chefFastFood} className="w-[496px] relative z-0" alt="Chef preparing burger" />
            </div>
         </div>
      </div>
   );
};

export default ExclusiveDeals;