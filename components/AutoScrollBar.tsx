"use client";
import AutoPlay from "embla-carousel-autoplay";
import Image from "next/image";
import{Carousel,CarouselContent,CarouselItem,} from "@/components/ui/carousel";
import { useMemo} from "react";

const images=[
  {id:1,url:'/images/Image2.png'},
  {id:2,url:'/images/headSet.png'},
  {id:3,url:"/images/smartWatch.png"}
]

export default function AutoScroll(){
  const plugin=useMemo(()=> AutoPlay({delay:5000,stopOnInteraction: false}),[])
   ;
  

  return(
    <Carousel plugins={[plugin]} opts={{loop:true, align: "center",slidesToScroll: 1}} className="w-full sm:w-[900px] mx-auto ">
      <CarouselContent>
 {images.map((image)=>(
<CarouselItem key={image.id} className="basis-full">
<Image src={image.url}   alt={`Promotion ${image.id}`}
              width={1200}
              height={400} priority={image.id === 1}  className="w-full h-[290px] sm:h-[450px] lg:h-[380px] xl:h-auto object-cover "/>
</CarouselItem>
    ))}
      </CarouselContent>
     
    </Carousel>
   
  )
}