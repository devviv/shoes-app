import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Filter } from './components/Filter';
import { Banner } from './components/Banner';
import { Product } from './components/Product';
import { ShoesDetails } from './components/ShoesDetails';
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
     {
        path:'/',
        element: <h1 className="text-6xl font-black text-start py-8 text-black">
        De jolies chaussures <br /> pour vous !
    </h1>
     }
])
function App() {
  return (
    
    <RouterProvider router={router}/>
  
  );
}

export default App;
