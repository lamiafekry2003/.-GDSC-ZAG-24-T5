import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import Products from './Components/Products/Products';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import Productlist from './Components/Productlist/Productlist';



function App() {
  const routs=createBrowserRouter([
    {
      path:'',element:<Layout></Layout>,children:[
        {index:true,element:<Slider></Slider>},
        {path:'products',element:<Products></Products>},
        {path:'products/:productsId',element:<Productlist></Productlist>},
        {path:'about',element:<About></About>}
      ]
    }
  ])
  return (
    <RouterProvider router={routs}/>
  );
}

export default App;
