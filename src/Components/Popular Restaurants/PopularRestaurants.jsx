import mcdonalds from '../../assets/imgs/Popular Restaurants/mcdonald.webp'
import papajohns from '../../assets/imgs/Popular Restaurants/papajohns.webp'
import kfc from '../../assets/imgs/Popular Restaurants/kfc.webp'
import texaschicken from '../../assets/imgs/Popular Restaurants/texaschicken.webp'
import burgerking from '../../assets/imgs/Popular Restaurants/burgerking.webp'
import shaurma from '../../assets/imgs/Popular Restaurants/shaurma.webp'


const PopularRestaurantCard = ({ image, title }) => {
   return ( // Added return statement here
      <div className="flex flex-col">
         <div>
            <img src={image} className="w-[238px] rounded-t-2xl" alt={title} /> {/* Added alt text */}
         </div>
         <div className='flex flex-col items-center w-[238px] bg-[#FC8A06] rounded-b-2xl p-3 text-white'> {/* Added padding and text color */}
            <h3 className="text-[18px] text-white font-semibold">{title}</h3>
         </div>
      </div>
   );
}

const PopularRestaurants = () => {
   const PopularRestaurantData = [
      {
         image: mcdonalds,
         title: 'McDonalds'
      },
      {
         image: papajohns,
         title: 'Papa Johns'
      },
      {
         image: kfc,
         title: 'KFC'
      },
      {
         image: texaschicken,
         title: 'Texas Chicken'
      },
      {
         image: burgerking,
         title: 'Burger King'
      },
      {
         image: shaurma,
         title: 'Shaurma'
      }
   ]
   return (
      <div className='mt-12'>
         <h2 className="text-3xl font-bold my-8">Order<span className='text-[#fc8a06]'>.uk</span> Popular Restaurants</h2>
         <div className='grid grid-cols-6 justify-items-center gap-16'>
            {PopularRestaurantData.map((item, index) => (
               <PopularRestaurantCard
                  key={index}
                  image={item.image}
                  title={item.title}
               />
            ))}
         </div>
      </div>
   );
};

export default PopularRestaurants;