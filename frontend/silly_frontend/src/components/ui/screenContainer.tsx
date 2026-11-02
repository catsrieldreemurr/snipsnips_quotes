import type { ReactNode } from "react";
import Navbar from "./navbar";

interface setProps{
    children?: ReactNode
    style?: String
    centerContent?: boolean
}

export default function ScreenContainer({children, style, centerContent}:setProps){
    return (
        <div className={`bg-gray-600 min-h-screen ${style}`}>
            <Navbar></Navbar>

            <div className={`${centerContent && "flex justify-center items-center flex-col"}`}>
                {children}
            </div>
        </div>
    )
}