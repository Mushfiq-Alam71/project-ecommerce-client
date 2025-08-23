import bannerimg1 from "../../assets/imgs/banner img/banner-img-dimmed.svg";
import bannerimg2 from "../../assets/imgs/banner img/banner-img.svg";
import navLogoMini from '/src/assets/imgs/nav-bar-logo.svg';

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
         <div className="relative left-88 z-1">
            <div className="relative mt-12">
               {/* image 2 (above image) */}
               <div className="absolute bottom-0 left-96 w-[400px] overflow-hidden">
                  <img src={bannerimg2} className="w-full" alt="" />
               </div>

               {/* image 1 (less opacity bottom image) */}
               <div className="w-[705px]">
                  <img src={bannerimg1} className="w-full" alt="" />
               </div>
            </div>
         </div>

         {/** review */}
         <div className="bg-[#FC8A06] py-10 px-48 absolute bottom-0 right-0 rounded-tl-[196px] rounded-br-xl">
            <div className="flex flex-col gap-8 ">
               <div className="bg-white text-black p-6 rounded-lg relative right-24 flex flex-row justify-between gap-24">
                  <div>
                     <img src={navLogoMini} className="w-[55px]" alt="" />
                     <p className="text-sm font-bold pt-2">Your order has been placed!</p>
                     <p className="text-sm font-normal">Awaiting Restaurant acceptance</p>
                  </div>
                  <div>
                     <p className="font-light text-sm">now</p>
                  </div>
               </div>
               <div className="bg-white text-black p-6 rounded-lg relative right-[-160px] flex flex-row justify-between gap-24">
                  <div>
                     <img src={navLogoMini} className="w-[55px]" alt="" />
                     <p className="text-sm font-bold pt-2">Order Accepted!!</p>
                     <p className="text-sm font-normal">Your order will be delivered shortly.</p>
                  </div>
                  <div>
                     <p className="font-light text-sm">now</p>
                  </div>
               </div>
               <div className="bg-white text-black p-6 rounded-lg relative right-12 flex flex-row justify-between gap-24">
                  <div>
                     <img src={navLogoMini} className="w-[55px]" alt="" />
                     <p className="text-sm font-bold pt-2">Your rider's nearby</p>
                     <p className="text-sm font-normal">They're almost there - get ready!</p>
                  </div>
                  <div>
                     <p className="font-light text-sm">now</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
