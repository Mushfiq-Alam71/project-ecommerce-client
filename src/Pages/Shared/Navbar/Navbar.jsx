import { NavLink } from 'react-router-dom';
import navLogo from '/src/assets/imgs/nav-bar-logo.svg';

const Navbar = () => {
   return (
      <div className="p-4">
         <div className="flex flex-row justify-between">
            <div>
               <img className='w-[215px]' src={navLogo} alt="nav bar logo" />
            </div>
            <div className="flex flex-row justify-between gap-16">
               <div className="space-x-4">
                  {["Home", "Browse Menu", "Special Offers", "Restaurants", 'Track Order'].map((item) => (
                     <NavLink
                        key={item}
                        to={`/${item.toLowerCase().replace(' ', '-')}`}
                        className={({ isActive }) =>
                           `px-12 py-3 rounded-4xl inline-flex items-center font-medium text-lg ${isActive
                              ? 'bg-[#FC8A06] text-white'
                              : 'text-black hover:bg-[#FC8A06] hover:text-white'
                           }`
                        }
                     >
                        {item}
                     </NavLink>
                  ))}
               </div>
               <div className=''>login/registration</div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;