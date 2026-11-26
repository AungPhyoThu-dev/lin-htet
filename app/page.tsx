import AutoScroll from "@/components/AutoScrollBar"
import ProductsIcons from "@/components/ProductsIcon"
export default async function Home() {
  return(
    <div>
      <div className="mt-5 sm:mt-8">
   <AutoScroll/>
      </div>
   <div className="flex justify-center mt:3 sm:mt-8">
<ProductsIcons/>
   </div>
    </div>
  )
}