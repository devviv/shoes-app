import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import  Navbar  from './components/Navbar';
import  Banner  from './components/Banner';
import  Filter  from './components/Filter';
import  Product  from './components/Product';
import  ShoesDetails  from './components/ShoesDetails';
import  ErrorPage  from './error-page';

const router = createBrowserRouter([
  {
    path:'/',
    element: <div>
      <Navbar />
      <Banner />
      <Filter />
      <Product />
    </div> ,
    errorElement : <ErrorPage />
  },
  {
    path: '/product/:productId',
    element: <div>
    <Navbar />
    <Filter />
    <ShoesDetails />
  </div> ,
  }
])
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
