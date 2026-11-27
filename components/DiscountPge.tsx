"use client";

import Image from "next/image";
import { Flame } from "lucide-react";
type product={
  id:string
  name:string
  price:number
  salePrice:number|null
  images:string[]
}
type Props={
  discountProducts:product[]
}

export default function DiscountPage({discountProducts}:Props){
  return(
    <section className="sm:mt-5 mt-3">
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-600">Flash Sale</h1>
                   <Flame className="text-orange-500" size={30} />
          </div>
           
         <p className="text-center text-sm text-gray-500 mt-2"> Do not miss out on our exclusive deals!</p>
        </div>
      
      </div>
     <div className="w-full sm:h-[300px] bg-red-400 h-auto">

     </div>
    </section>

  )
}