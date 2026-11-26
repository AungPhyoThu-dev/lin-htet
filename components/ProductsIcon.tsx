"use client"

import {
  Smartphone,
  Laptop,
  Headphones,
  Shirt,
  Footprints,
  Gamepad2,
} from "lucide-react";
import Link from "next/link";
export default function ProductsIcons(){
  const navItems=[
    {id:1,name:"Phones",url:"/shop/products",icon:Smartphone},
    {id:2,name:"Laptops",url:"/shop/products",icon:Laptop},
    {id:3,name:"Audio",url:"/shop/products",icon:Headphones},
    {id:4,name:"Fashion",url}
  ]
  return(
    <div className="flex flex-row items-center">
      <aside className="   w-[300px]
  backdrop-blur-lg
  border-t border-white/30
  shadow-sm
   p-2 bg-white/30 sm:w-[800px]">
       <nav>
        <div className="p-2 ">
          <Link href="/shop/products" >
<Smartphone className="text-red-300"/>
</Link>
        </div>

        
        </nav> 
      </aside>
    </div>
  )
}