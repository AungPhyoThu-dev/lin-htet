import Link from "next/link";
import{Button} from "@/components/ui/button"

export default function SideBar(){
  return(
    <aside className="fixed bottom-0 left-0 z-50 w-full border-t bg-background p-2">
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
  )
}