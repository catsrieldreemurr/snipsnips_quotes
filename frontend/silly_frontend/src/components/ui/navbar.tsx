
import Typography from "./typography";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

import { Menu, Calendar, Book, Award, KeySquare, LockOpen } from "lucide-react";
import { Button } from "./button";

import NavbarLinks from "./navbarLinks";

export default function Navbar(){
  return (
    <nav className="bg-gray-800 p-5 flex flex-row justify-between items-center">
      <Typography variant="h1" isBold>Snip Snips Quotes</Typography>

      <div className="gap-5 hidden sm:flex text-white">
        <NavbarLinks href="/" icon={<Calendar/>}>Quote of the Day</NavbarLinks>
        <NavbarLinks href="/" icon={<Book/>}>All Quotes</NavbarLinks>
        <NavbarLinks href="/" icon={<Award/>}>Leaderboards</NavbarLinks>
        <NavbarLinks href="/" icon={<KeySquare/>}>Register</NavbarLinks>
        <NavbarLinks href="/" icon={<LockOpen/>}>Log in</NavbarLinks>
      </div>

      <div className="sm:hidden flex">
        <Popover>
          <PopoverTrigger render={<Button><Menu/></Button>}></PopoverTrigger>

          <PopoverContent> 
            <NavbarLinks href="/" icon={<Calendar/>}>Quote of the Day</NavbarLinks>
            <NavbarLinks href="/" icon={<Book/>}>All Quotes</NavbarLinks>
            <NavbarLinks href="/" icon={<Award/>}>Leaderboards</NavbarLinks>
            <NavbarLinks href="/" icon={<KeySquare/>}>Register</NavbarLinks>
            <NavbarLinks href="/" icon={<LockOpen/>}>Log in</NavbarLinks>
          </PopoverContent>
        </Popover>
      </div>
      
    </nav>
  )
}