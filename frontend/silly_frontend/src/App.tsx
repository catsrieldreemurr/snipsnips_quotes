import { Route, Routes } from "react-router";

import NotFound from "./pages/404.tsx"
import RegisterScreen from "./pages/register.tsx"
import HomePage from "./pages/home.tsx";

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/register" element={<RegisterScreen/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}