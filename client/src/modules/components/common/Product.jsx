// import React from 'react'
import PropTypes from "prop-types";
import { HiArrowRight } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa6";

const Product = ({ mainImg, name, price, oldPrice, cartNo }) => {
  return (
    <div>
      <div className="bg-[white] border-2 my-6 mx-4 text-center">
        <div className="pt-6 px-4">
          <div className="">
            <img
              src={mainImg}
              alt="Chair"
              className="w-[280px] h-auto mx-auto"
            />
          </div>
          <h6 className="text-[16px] mt-4 mb-2">{name.toString().length>26 ? `${name.slice(0,26)}...`:name}</h6>
          <h6 className="text-[16px] mb-3">
            <span className="mr-3 text-[red] line-through"> ₹ {oldPrice}</span> ₹ {price}
          </h6>
        </div>
        <div className="grid grid-cols-12 gap-0  border-t-2 mt-4">
          <div className="col-span-2">
            <div className="py-4 px-4 text-[#827f7f] hover:bg-[#a26e44] hover:text-white">
              <FaHeart className="" />
            </div>
          </div>
          <div className="col-span-8">
            <div className="text-[#827f7f]">
              {cartNo > 0 ? (
                <button className="add-cart-btn go-cart-btn">
                  Go to Card <FiShoppingCart className=" ml-2" />
                </button>
              ) : (
                <button className="add-cart-btn">
                  Add to Cart <FiShoppingCart className=" ml-2" />
                </button>
              )}
            </div>
          </div>
          <div className="col-span-2">
            <div className="py-4 px-4 text-[#827f7f] hover:bg-[#a26e44] hover:text-white">
              <HiArrowRight className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  mainImg: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  cartNo: PropTypes.number,
};

export default Product;
