// import React from 'react'

import { Button } from "@material-tailwind/react";
import bg from "/src/assets/images/homePage/b-1.png"
const HeroBanner = () => {
  return (
    <div className="bg-primary h-auto lg:h-[80vh] flex items-center">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
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
          <div>
            <img src={bg} alt="img" className="w-[100%] h-auto"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
