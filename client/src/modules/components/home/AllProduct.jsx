// import React from 'react'
import { MdOutlineChair } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation  } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const AllProduct = () => {

    const allproductData = [
        {
            img:()=><MdOutlineChair className=" w-[40px] h-[40px]" />,
            link:"",
        },
        {
            img:()=><MdOutlineChair className="w-[40px] h-[40px]"  />,
            link:"",
        },
        {
            img:()=><MdOutlineChair className="w-[40px] h-[40px]"  />,
            link:"",
        },
        {
            img:()=><MdOutlineChair className="w-[40px] h-[40px]"  />,
            link:"",
        },
        {
            img:()=><MdOutlineChair className="w-[40px] h-[40px]"  />,
            link:"",
        },
        {
            img:()=><MdOutlineChair className="w-[40px] h-[40px]"  />,
            link:"",
        },
        {
            img:()=><MdOutlineChair className="w-[40px] h-[40px]"  />,
            link:"",
        },
    ]
  return (
    <div className="my-10">
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay,Navigation]}
            navigation={true}
            breakpoints={{
                640: {
                slidesPerView: 3,
                spaceBetween: 20,
                },
                768: {
                slidesPerView: 4,
                spaceBetween: 40,
                },
                1024: {
                slidesPerView: 5,
                spaceBetween: 50,
                },
            }}
            className="mySwiper"
        >
            {
                allproductData.map((ele,i)=>{
                    return <SwiperSlide key={i} className="flex justify-center items-center">
                        <div className="w-[130px] h-[130px] flex justify-center items-center text-[#000] hover:text-[#a26e44] hover:border-[#a26e44] border-[#000] border-4 rounded-full">{ele.img()}</div>
                    </SwiperSlide>
                })
            }
        </Swiper>
    </div>
  )
}

export default AllProduct
