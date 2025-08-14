import star from '/src/assets/imgs/star.png';
import location from '/src/assets/imgs/location.svg';

const PromoBar = () => {
   return (
      <div className='flex flex-row gap-2 justify-between items-center mx-4 mb-4 rounded-b-xl bg-[#FAFAFA] pl-4'>
         <div className='flex flex-row gap-2'>
            <div className='flex text-center'>
               <img className='w-5' src={star} alt="star logo" />
            </div>
            <div className='font-semibold'>Get 5% Off your first order, <span className='font-bold text-[#FC8A06] underline'>Promo: ORDER5</span></div>
         </div>
         <div className='flex flex-row justify-between items-center gap-12'>
            <div className='flex flex-row gap-1.5'>
               <div className='flex text-center'>
                  <img className='w-5' src={location} alt="star logo" />
               </div>
               <div className='flex flex-row gap-2'>
                  <div className='font-semibold'>Regent Street, A4, A4201, London</div>
                  <div className='text-[#FC8A06] underline'>Change Location</div>
               </div>
            </div>
            <div className='bg-[#028643] rounded-b-xl text-white p-4 font-semibold'>23 Items | GBP 79.89 greenbox</div>
         </div>
      </div>
   );
};

export default PromoBar; 