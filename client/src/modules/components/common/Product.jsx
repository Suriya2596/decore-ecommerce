// import React from 'react'
import img from "../../../assets/images/homePage/b-1.png"
import { IoStar } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa6";

const Product = () => {

    const handleStar = (n)=>{
        const arr = []
        for(let i=0 ; i<n;i++){
            arr.push(i)
        }
        return arr
    }
  return (
    <div className="bg-[white] w-[300px]">
      <div>
        <img src={img} alt="Chair" className="w-[210px] h-auto"  />
      </div>
      <div>
        <h4 className="text-[22px]">DONEC VEL VENENATIS</h4>
        <h6 className="text-[18px]">Rs.11,115<span className="ml-3 text-[red] line-through">15,115</span></h6>
        <div>
            {handleStar(5).map((i)=>{
                return <div key={i}>
                    <IoStar />
                </div>
            })}
        </div>
      </div>
      <div>
        <div>
            <FaHeart />
        </div>
        <div>
            <button>Add to Cart <FiShoppingCart /></button>
        </div>
        <div>
            <HiArrowRight />
        </div>
      </div>
    </div>
  )
}

export default Product
