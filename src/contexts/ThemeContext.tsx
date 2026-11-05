import { createContext, useContext, useEffect, useState } from "react";

export type TTheme = "dark" | "light" | "system";
type TThemeContext = {
  theme: TTheme;
  resolvedTheme: "dark" | "light";
  setTheme: (theme: TTheme) => void;
};
const ThemeContext = createContext<TThemeContext | undefined>(undefined);
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<TTheme>(
    (localStorage.getItem("app-theme") as TTheme) || "system",
  );

  const [systemTheme, setSystemTheme] = useState<"light" | "dark">(() => {
    return matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
   const mediaquery=matchMedia("(prefers-color-scheme:dark)")
   const handleChange=(e:MediaQueryListEvent)=>{
    setSystemTheme(e.matches?"dark":"light")
   }
   mediaquery.addEventListener("change",handleChange)
   return ()=>mediaquery.removeEventListener("change",handleChange)
  }, []);
  const resolvedTheme=theme==="system"?systemTheme:theme
  function handleSetTheme(newTheme:TTheme){
    setTheme(newTheme)
    localStorage.setItem("app-theme",newTheme)
  }
  return <ThemeContext.Provider value={{resolvedTheme,setTheme:handleSetTheme,theme}}>
    <div data-bs-theme={resolvedTheme} className="vh-100 w-100">

    {children}

    </div>
    
    </ThemeContext.Provider>;
}
export const useTheme=()=>{
    const context=useContext(ThemeContext)
    if(!context)
        throw new Error("useTheme must be used within a ThemeProvider");
    return context
}