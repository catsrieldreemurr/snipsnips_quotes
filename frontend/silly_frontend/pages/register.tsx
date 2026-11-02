import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ScreenContainer from "@/components/ui/screenContainer"
import Typography from "@/components/ui/typography"
import { useState } from "react"


export default function RegisterScreen(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hasFailed, setHasFailed] = useState(false);

    async function SubmitFunction(){
        try{
            const res = await fetch("http://localhost:3000/api_v1/postCreateUser", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })

            if(!res.ok){
                setHasFailed(false);
            }
        } 
        catch(err){
            console.error(err);
            setHasFailed(true);
        }
    }

    return (
        <ScreenContainer centerContent>
            <Typography variant="h2" isBold style="p-5">Create an Account</Typography>

            <form className="text-center text-white" action={SubmitFunction}>
                <Label htmlFor="username" className="p-5 text-center">Username</Label>
                <Input type="text" name="username" id="username" placeholder="JaneDoe123"
                onChange={(e) => {
                    setUsername(e.target.value)
                }}></Input>

                <Label htmlFor="password" className="p-5 text-center">Password</Label>
                <Input type="password" name="password" id="password" placeholder="AV3ryS4feP4ssw0rd"
                onChange={(e) => {
                    setPassword(e.target.value)
                }}></Input>
                
                <Button type="submit">Submit</Button>
            </form>

            {hasFailed && <div className="bg-red-200">Something has failed LOLOLOL</div>}
        </ScreenContainer>
    )
}