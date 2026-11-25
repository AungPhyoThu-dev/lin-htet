import { ShoppingBag,} from "lucide-react";
import HeaderButton from "./HeaderButton";
export default function Header(){
  return(
    <div>
     <div className="flex flex-row w-full p-2 sm:p-4 border-b shadow-sm   justify-between">
      <div className="flex flex-row items-center">
    
           <ShoppingBag className="hidden sm:flex text-orange-500 mr-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 "/>
     
        
      <div className="flex flex-col">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
<span className="text-zinc-900">Lin</span>
<span className="text-orange-500">Htet</span>
        </h1>
        <p className="text-[8px] sm:text-[11px] text-gray-600 tracking-widest">
          SHOP SMART, LIVE BETTER
        </p>
      </div>
      </div>
   <HeaderButton/>
    
     </div>
    </div>
  )
}