import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router";

import NotFound from "./pages/404.tsx"
import RegisterScreen from "./pages/register.tsx"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterScreen/>}/>
          <Route path="/" element={<App />} />
          
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        
      </BrowserRouter>
      
    </ThemeProvider>
  </StrictMode>
)
