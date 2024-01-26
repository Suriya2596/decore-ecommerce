// import React from 'react'

import { Button } from "@material-tailwind/react";
import bg from "/assets/images/homePage/b-1.png"


const HeroBanner = () => {
  return (
    <div className="bg-primary h-auto lg:h-[80vh] flex lg:items-center lg:mx-6 lg:my-10 lg:rounded-[20px]">
      <div className="mx-auto container px-4 xl:px-16 py-6">
        <div className="grid grid-cols-12 lg:items-center gap-4">
          <div className="col-span-12 lg:col-span-6">
            <h1 className="white-cl mb-5 md:w-[80%]">Modern Interior Design Studio</h1>
            <p className="gray-cl">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <div className="mt-12">
              <Button className="pry-btn me-6">Shop Now</Button>
              <Button className="sry-btn">Explore</Button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="w-[250px] md:w-[360px] lg:w-[100%] mt-5 lg:mt-0">
              <img src={bg} alt="img" className="w-[100%] h-auto"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
