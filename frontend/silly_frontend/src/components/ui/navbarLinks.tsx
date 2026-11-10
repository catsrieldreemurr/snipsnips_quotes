import type { ReactNode } from "react";

interface SetProps{
  children?: ReactNode
  href: string
  icon: ReactNode
  excludeRedirect?: boolean
}

export default function NavbarLinks({children, href, icon, excludeRedirect}:SetProps){
  return (
    <div className="flex gap-2 flex-row items-center">
      {!excludeRedirect && <a className="hover:bg-gray-500 p-3 rounded-xl" href={href}>
        <div className="flex gap-5">{icon}{children}</div>
      </a>}

      {excludeRedirect && <div className="flex gap-5 hover:bg-gray-500 p-3 rounded-xl">{icon}{children}</div>}

    </div>
  )
}