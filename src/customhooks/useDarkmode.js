import { useState, useEffect } from "react";




const useDarkMode = () => {
    console.log(localStorage.getItem("darkmode"))
    const [darkmode, setDarkmode] = useState(localStorage.getItem("darkmode")  === "true" || false);
    useEffect(() => {
     let localTheme = localStorage.getItem("darkmode")  === "true"  
     ? true 
     :  localStorage.getItem("darkmode")  === null &&
     window.matchMedia("(prefers-color-scheme:dark)").matches ? 
     true :
    false
     setDarkmode(localTheme)

    }, []);
    console.log(window.matchMedia("(prefers-color-scheme:dark)").matches)
    const handleToggle =() =>{
      localStorage.setItem("darkmode", !darkmode)
      setDarkmode(!darkmode)
    }
    const resetTheme = () =>{
        localStorage.removeItem("darkmode")
        setDarkmode(window.matchMedia("(prefers-color-scheme:dark)").matches)
    }
    return [darkmode, handleToggle, resetTheme]
}

export default useDarkMode