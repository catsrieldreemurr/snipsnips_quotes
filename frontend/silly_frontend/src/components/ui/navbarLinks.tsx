import type { ReactNode } from "react";

interface SetProps{
  children?: ReactNode
  href: string
  icon: ReactNode
}

export default function NavbarLinks({children, href, icon}:SetProps){
  return (
    <div className="flex gap-2 flex-row items-center">
      <a className="hover:bg-gray-500 p-3 rounded-xl" href={href}><div className="flex gap-5">{icon}{children}</div></a>
    </div>
  )
}