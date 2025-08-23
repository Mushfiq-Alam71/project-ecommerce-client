import { NavLink } from "react-router";

const ExclusiveDeals = () => {
   return (
      <div className="my-8">
         {/* simple text and little nav menu */}
         <div className="flex flex-row justify-between">
            <div><p className="font-bold text-3xl">Up to <span className="text-[#fc8a06]">-40%</span> Order.uk exlusive deals</p></div>
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
         <div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
   );
};

export default ExclusiveDeals;