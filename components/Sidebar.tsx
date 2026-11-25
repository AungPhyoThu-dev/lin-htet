"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { House,Package, ShoppingCart,
  UserRound } from "lucide-react";
export default function SideBar(){
  const pathname=usePathname();
  const navItems=[
    {id:1,name:"Home",href:"/",icon:House},
    {id:2,name:"Products",href:"/shop/products",icon:Package},
    {id:3,name:"Cart",href:"/shop/cart",icon:ShoppingCart},
    {id:4,name:"Profile",href:"/auth/profile",icon:UserRound}
  ]
  return(
    <div className="flex justify-center items-center">
       <aside className=" fixed bottom-2  left-1/2 -translate-x-1/2 w-[300px]
  backdrop-blur-lg
  border-t border-white/30
  shadow-lg
  z-50 p-2 bg-white/30 sm:w-[500px]">
      <nav className="flex items-center justify-around " >
        {
           navItems.map((item)=>{
      const isActive=pathname==item.href;
      const Icon=item.icon;
      return(
        <div key={item.id}>
          
          <Link href={item.href} className={`flex flex-col items-center   rounded-full
               
                hover:bg-white/40
                hover:text-orange-600
                active:scale-95
                transition-all duration-200 ${isActive?"text-blue-500":" text-gray-600"}`}>
          <Icon className="text-gray/100 w-5 h-5 sm:w-8 smh-8"/>
<span className="text-xs font-medium drop-shadow-sm ">{item.name}</span>
</Link>
        

 
 


 
 


 

        </div>
      )
       })
        }
      



      </nav>
    </aside>
    </div>
   
  )
}