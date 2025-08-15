import { NavLink } from 'react-router-dom';
import navLogo from '/src/assets/imgs/nav-bar-logo.svg';
import userLogo from '/src/assets/imgs/maleUser.svg';

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
                              : 'text-black hover:underline hover:decoration-4 hover:decoration-orange-400 hover:underline-offset-4 hover:translate-y-1 transition-all duration-300'
                           }`
                        }
                     >
                        {item}
                     </NavLink>
                  ))}
               </div>
               <NavLink className='flex flex-row gap-2 bg-[#03081F] text-white items-center py-4 px-6 rounded-4xl font-medium'>
                  <div><img className='w-[30px]' src={userLogo} alt="nav bar logo" /></div>
                  <div className='flex flex-row gap-2'>
                     <div>Login</div>
                     <div>/</div>
                     <div>Register</div>
                  </div>
               </NavLink>
            </div>
         </div>
      </div>
   );
};

export default Navbar;