import { ShoppingBag,} from "lucide-react";
import HeaderButton from "./HeaderButton";
export default function Header(){
  return(
    <div>
     <div className="flex flex-row w-full p-2 sm:p-3 lg:p-2 border-b shadow-sm   justify-between">
      <div className="flex flex-row items-center">
    
           <ShoppingBag className="hidden sm:flex text-orange-500 mr-2 w-8 h-8 sm:w-5 sm:h-5 md:w-9 md:h-9 "/>
     
        
      <div className="flex flex-col">
        <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-2xl font-extrabold tracking-tight">
<span className="text-zinc-900">Lin</span>
<span className="text-orange-500">Htet</span>
        </h1>
        <p className="text-[8px] sm:text-[11px] md:text-[11px] lg:text-[9px] text-gray-600 tracking-widest">
          SHOP SMART, LIVE BETTER
        </p>
      </div>
      </div>
   <HeaderButton/>
    
     </div>
    </div>
  )
}