import burger from '../../assets/imgs/Popular Category/burger.webp'
import salad from '../../assets/imgs/Popular Category/salad.webp'
import pasta from '../../assets/imgs/Popular Category/pasta.webp'
import pizza from '../../assets/imgs/Popular Category/pizza.webp'
import breakfast from '../../assets/imgs/Popular Category/breakfast.webp'
import soup from '../../assets/imgs/Popular Category/soup.webp'

// Added return statement to the component
const PopularCategoryCard = ({ image, title, restaurantNumb }) => {
   return ( // Added return statement here
      <div className="flex flex-col">
         <div>
            <img src={image} className="w-[238px] rounded-t-2xl" alt={title} /> {/* Added alt text */}
         </div>
         <div className='flex flex-col w-[238px] bg-[#03081F] rounded-b-2xl p-3 text-white'> {/* Added padding and text color */}
            <h3 className="text-[18px] text-[#FC8A06] font-semibold">{title}</h3>
            <p className="text-[14px] text-white">{restaurantNumb} Restaurants</p> {/* Fixed pluralization */}
         </div>
      </div>
   );
}

const PopularCategory = () => {
   const popularItemsData = [
      {
         image: burger,
         title: 'Burger',
         restaurantNumb: '120'
      },
      {
         image: salad,
         title: 'Salad',
         restaurantNumb: '80'
      },
      {
         image: pasta,
         title: 'Pasta',
         restaurantNumb: '60'
      },
      {
         image: pizza,
         title: 'Pizza',
         restaurantNumb: '150'
      },
      {
         image: breakfast,
         title: 'Breakfast',
         restaurantNumb: '90'
      },
      {
         image: soup,
         title: 'Soup',
         restaurantNumb: '40'
      },
   ]

   return (
      <section className='mt-12'>
         <h2 className="text-3xl font-bold my-8">Order<span className='text-[#fc8a06]'>.uk</span> Popular Categories</h2>
         <div className='grid grid-cols-6 justify-items-center gap-16'>
            {popularItemsData.map((item, index) => (
               <PopularCategoryCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  restaurantNumb={item.restaurantNumb}
               />
            ))}
         </div>
      </section>
   );
};

export default PopularCategory;