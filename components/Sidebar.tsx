import Link from "next/link";
import{Button} from "@/components/ui/button"

export default function SideBar(){
  return(
    <div className="flex justify-center items-center">
       <aside className=" fixed bottom-2  left-1/2 -translate-x-1/2 w-[300]
  bg-white/70 backdrop-blur-lg
  border-t border-white/30
  shadow-lg
  z-50 p-4 sm:w-[500px]">
      <nav className="flex items-center justify-around" >
<Link href="/">
<Button>Home</Button>
</Link>
<Link href="/auth/login">
<Button>
Login
</Button>
</Link>
<Link href="/auth/register">
<Button>
Register
</Button>
</Link>
      </nav>
    </aside>
    </div>
   
  )
}