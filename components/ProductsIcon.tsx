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
{ id: 1, name: "Phones", url: "/shop/products", icon: Smartphone, color: "text-white",bg:"bg-black" },
  { id: 2, name: "Laptops", url: "/shop/products", icon: Laptop, color: "text-gray-700" ,bg:"bg-blue-200"},
  { id: 3, name: "Audio", url: "/shop/products", icon: Headphones, color: "text-black" ,bg:"bg-green-300"},
  { id: 4, name: "Fashion", url: "/shop/products", icon: Shirt, color: "text-red-500",bg:"bg-amber-100" },
  { id: 5, name: "Sneaker", url: "/shop/products", icon: Footprints, color: "text-purple-500",bg:"bg-cyan-100" },
  { id: 6, name: "Game", url: "/shop/products", icon: Gamepad2, color: "text-blue-500",bg:"bg-yellow-400" }
  ]
  return(
    <div className="flex flex-row justify-center w-full items-center ">
      <aside className="   
 w-full sm:max-w-[850px] rounded-2xl border border-gray-100 bg-white/80 shadow-sm p-3 sm:p-5">
       <nav className="flex items-center  gap-3">
       
        <div className="p-2 flex justify-between sm:justify-around w-full text-center gap-1.5 sm:gap-2">
          
          {navItems.map((item)=>{
            const Icon=item.icon;
            return(
              <div key={item.id}  >
      <Link  href={item.url}  className="flex flex-col items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-1">
      <div className={`p-3  gap-3 sm:gap-1 rounded-full ${item.bg}`}>
  <Icon className={`${item.color} size-4 sm:size-8` }/>
</div>

<span className="text-[10px] sm:text-sm font-medium text-gray-700">{item.name}</span>
</Link>
</div>
            )

    
})}
  
        </div>

        
        </nav> 
      </aside>
    </div>
  )
}