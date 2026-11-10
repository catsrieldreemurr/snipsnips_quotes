
import Typography from "./typography";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

import { Menu, Calendar, Book, Award, KeySquare, LockOpen } from "lucide-react";
import { Button } from "./button";

import NavbarLinks from "./navbarLinks";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

export default function Navbar(){
  return (
    <nav className="bg-gray-800 p-5 flex flex-row justify-between items-center">
      <Typography variant="h1" isBold>Snip Snips Quotes</Typography>

      <div className="gap-5 hidden sm:flex text-white">
        <NavbarLinks href="/" icon={<Calendar/>}>Quote of the Day</NavbarLinks>
        <NavbarLinks href="/" icon={<Book/>}>All Quotes</NavbarLinks>
        <NavbarLinks href="/" icon={<Award/>}>Leaderboards</NavbarLinks>
                
        <header className="flex">
          <Show when={"signed-out"}>
            <NavbarLinks href="/register" excludeRedirect  icon={<KeySquare/>}><SignUpButton/></NavbarLinks>
            <NavbarLinks href="/" excludeRedirect icon={<LockOpen/>}><SignInButton/></NavbarLinks>
          </Show>

          <Show when={"signed-in"}>
            <UserButton/>
          </Show>
        </header>

      </div>

      <div className="sm:hidden flex">
        <Popover>
          <PopoverTrigger render={<Button><Menu/></Button>}></PopoverTrigger>

          <PopoverContent> 
            <NavbarLinks href="/" icon={<Calendar/>}>Quote of the Day</NavbarLinks>
            <NavbarLinks href="/" icon={<Book/>}>All Quotes</NavbarLinks>
            <NavbarLinks href="/" icon={<Award/>}>Leaderboards</NavbarLinks>
            <NavbarLinks href="/register" icon={<KeySquare/>}>Register</NavbarLinks>
            <NavbarLinks href="/" icon={<LockOpen/>}>Log in</NavbarLinks>
          </PopoverContent>
        </Popover>
      </div>
      
    </nav>
  )
}