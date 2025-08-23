import bannerimg1 from "../../assets/imgs/banner img/banner-img-dimmed.svg";
import bannerimg2 from "../../assets/imgs/banner img/banner-img.svg";

const Banner = () => {
   return (
      <div className="flex flex-row bg-[#03081F] text-white rounded-xl relative items-center">
         {/* text */}
         <div className=" p-18 absolute">
            <div className="text-base font-normal">Order Restaurant food, takeaway and groceries.</div>
            <div className="font-bold text-[58px]">Feast Your Senses,<br /> <span className="text-[#FC8A06] font-bold">Fast and Fresh</span></div>
            <div>
               <div className="font-normal text-sm">Enter a postcode to see what we deliver</div>
               <div className="">search bar</div>
            </div>
         </div>

         {/** img */}
         <div className="relative left-88">
            <div className="relative mt-12">
               {/* image 2 (above image 1) */}
               <div className="absolute bottom-0 left-96 w-[400px] overflow-hidden">
                  <img src={bannerimg2} className="w-full" alt="" />
               </div>

               {/* image 1 */}
               <div className="w-[705px]">
                  <img src={bannerimg1} className="w-full" alt="" />
               </div>
            </div>
         </div>

         {/** review */}
         <div className="bg-[#FC8A06] py-4 px-8 absolute bottom-0 justify-end">
            <div className="flex flex-col space-y-4">
               <div className="bg-white text-black p-4 rounded-lg">
                  <p className="font-semibold">Order</p>
                  <p>Your order has been placed!</p>
               </div>
               <div className="bg-white text-black p-4 rounded-lg">
                  <p className="font-semibold">Order</p>
                  <p>Your order is on the way!</p>
               </div>
               <div className="bg-white text-black p-4 rounded-lg">
                  <p className="font-semibold">Order</p>
                  <p>Your rider's nearby - get ready!</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
