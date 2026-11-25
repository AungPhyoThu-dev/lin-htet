"use client";
import{UserRound,ShoppingCart } from "lucide-react";
import {Button} from "@/components/ui/button";
export default function HeaderButton(){
  return(
    <div className="flex flex-row sm:gap-6 gap-2 items-center sm:mr-4 mr-2 ">
    <div  className="sm:p-1 p-1 rounded-full border border-gray-200 hover:bg-orange-50 hover:text-orange-600 transition">
  <Button variant="ghost"
          size="icon"
          className="rounded-full w-7 h-7 sm:w-11 sm:h-11 ">
      <UserRound className="w-4 h-4 sm:w-6 sm:h-6 lg:w-11 lg:h-11" />
    </Button>
    
    </div>
    <div  className="sm:p-1 p-1 rounded-full border border-gray-200 hover:bg-orange-50 hover:text-blue-600 transition">
  <Button variant="ghost"
          size="icon"
          className="rounded-full w-7 h-7 sm:w-11 sm:h-11">
      <ShoppingCart className="w-5 h-5 sm:w-4 sm:h-4"/>
    </Button>
</div>

   </div>
  )
}