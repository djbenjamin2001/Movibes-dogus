import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './components/Home';
import Movies from './components/Movies';
import Television from './components/Tv';
import Upcoming from './components/Upcoming';
import Details from './components/Details';
import Search from './components/Search';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
  <Route index element={<Home/>}/>
  <Route path='/movies' element={<Movies/>}></Route>
  <Route path='/tv' element={<Television/>}></Route>
  <Route path='/upcoming' element={<Upcoming/>}></Route>
  <Route path='/details/:type/:id' element={<Details/>}></Route>
  <Route path='/search' element={<Search/>}></Route>
  
  </Route>
  
  
  
  ))

  root.render(
    <React.StrictMode>
     <RouterProvider router={router}/>
    </React.StrictMode>
  );
  