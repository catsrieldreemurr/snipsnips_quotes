import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ScreenContainer from "@/components/ui/screenContainer"
import Typography from "@/components/ui/typography"
import { useState } from "react"


export default function RegisterScreen(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [hasFailed, setHasFailed] = useState({
      hasFailed: false,
      errorMessage: "", 
      errorCode: 200,
      hasFinished: false
    });

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
            const data = await res.json();
            setHasFailed({
              hasFailed: true,
              errorMessage: data.errorMessage || "Something went wrong.",
              errorCode: res.status,
              hasFinished: true
            });
          } else {
            setHasFailed({
              hasFailed: false,
              errorMessage: "Account Successfully Created!", 
              errorCode: 200,
              hasFinished: true
            })
          }
      }

      catch(err){
        console.error(err);

        setHasFailed({
          hasFailed: true, 
          errorMessage: "Network Error, Please try again later.",
          errorCode: 0,
          hasFinished: true
        });
      }
    }

    return (
        <ScreenContainer centerContent>
            <Typography variant="h2" isBold style="p-5">Create an Account</Typography>
            {hasFailed.hasFailed && <div className="bg-red-400 p-5 rounded-xl text-red-100">{hasFailed.errorMessage}</div>}
            {(hasFailed.hasFailed === false && hasFailed.hasFinished) && <div className="bg-green-200 p-5 rounded-xl text-green-800">{hasFailed.errorMessage}</div>}


            <form className="text-center text-white" action={SubmitFunction}>
                <Label htmlFor="username" className="p-5 text-center">Username</Label>
                <Input type="text" name="username" id="username" placeholder="JaneDoe123" value={username}
                onChange={(e) => {
                    setUsername(e.target.value)
                }}></Input>

                <Label htmlFor="password" className="p-5">Password</Label>
                <Input type="password" name="password" id="password" placeholder="AV3ryS4feP4ssw0rd" value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}></Input>
                
                <Button disabled={(hasFailed.hasFailed == false && hasFailed.hasFinished)} type="submit" className={"m-5"}>Submit</Button>
            </form>
        </ScreenContainer>
    )
}