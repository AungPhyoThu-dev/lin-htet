import AutoScroll from "@/components/AutoScrollBar"
import ProductsIcons from "@/components/ProductsIcon";
import { prisma } from "@/lib/prisma";
import DiscountPage from "@/components/DiscountPge";
export default async function Home() {

  const discountProducts= prisma.product.findMany({
    where:{salePrice:{
      not:null
    },
    isActive:true,
    stock:{
      gt:0
    }
  }
  })
  return(
    <div>
      <div className="mt-5 sm:mt-8">
   <AutoScroll/>
      </div>
   <div className="flex justify-center mt:3 sm:mt-8">
<ProductsIcons/>

   </div>
   <div>
    <DiscountPage discountProducts={discountProducts}/>
   </div>
    </div>
  )
}