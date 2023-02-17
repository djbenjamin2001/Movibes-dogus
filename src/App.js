import './App.css';
import { Outlet } from 'react-router-dom';
import Globalstyles from './components/Globalstyles';
import { ThemeProvider } from '@emotion/react';
import { theme } from './themes/theme';
import Header from './components/Header';
import useDarkmode from "./customhooks/useDarkmode"


console.log("lighttheme: ", theme.light)
console.log("darktheme: ", theme.dark)
function App() {
  const  [darkmode] = useDarkmode();
  return (
<ThemeProvider theme={darkmode ? theme.dark : theme.light}>
   <Globalstyles/>
 
  <Header/>
 
  <main>
    <Outlet/> 
  </main>
  <footer></footer>
  </ThemeProvider>
  );
}

export default App;
