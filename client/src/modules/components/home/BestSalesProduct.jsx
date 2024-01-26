// import React from 'react'

import Product from "../common/Product"
import SectionHead from "../common/SectionHead"

const BestSalesProduct = () => {

  const product = [
    {
      mainImg: "/assets/images/homePage/p-1.svg",
      price: 11300,
      oldPrice: 19500,
      cartNo:0,
      name:"Chair Styled",
      star:3
    },
    {
      mainImg: "/assets/images/homePage/p-2.svg",
      price: 33300,
      oldPrice: 49500,
      cartNo:0,
      name:"seatted Sofa Styled",
      star:3
    },
     {
      mainImg: "/assets/images/homePage/p-3.svg",
      price: 66600,
      oldPrice: 75500,
      cartNo:0,
      name:"3 seatted Sofa and chair Styled",
      star:3
    },
     {
      mainImg: "/assets/images/homePage/p-4.svg",
      price: 19999,
      oldPrice: 25999,
      cartNo:0,
      name:"4 seatted chair Styled",
      star:3
    },
  ]
  return (
    <div>
      <div className="mt-20">
        <SectionHead heading1={"Best Sales"} heading2={"Product"} />
      </div>
      <div className="grid grid-cols-12 gap-4">
        {
          product.map((ele,i)=>{
            return <div key={i} className="col-span-12 md:col-span-6 lg:col-span-3">
              <Product {...ele} />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default BestSalesProduct
