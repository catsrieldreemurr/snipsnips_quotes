import Typography from "@/components/ui/typography";
import { House } from "lucide-react"

export default function NotFoundPage(){
  return (
    <div className="bg-gray-600 min-h-screen flex justify-center items-center flex-col gap-10">
      <Typography variant="h1" isBold>Error 404: Page not found.</Typography>
      <Typography>Better luck next time, you trooper.</Typography>
    
      <a href="/">
        <Typography style="flex gap-5"> Go home <House/></Typography>
      </a>
    </div>
    
  )
}