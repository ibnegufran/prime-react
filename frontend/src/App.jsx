import { useEffect, useState } from "react";
import { Button } from "primereact/button";

import {  FirstContext, VisibleContext} from "./context/context.js";
import { useAuth } from "./context/authContext.jsx";

import { TitleContext } from "./context/context.js";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./components/home";
import About from "./components/about";
import Shop from "./components/shop";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { CartProvider } from "react-use-cart";
import Cart from "./components/cart.jsx";
import Buy from "./components/buy.jsx";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/private/PrivateRoute.jsx";
import Account from "./components/Account.jsx";
import ForgotPass from "./components/ForgotPass.jsx";
import AdminRoute from "./components/private/Admin.jsx";
import AdminDash from "./components/admin/aminDash.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/account",
    element: <PrivateRoute />, // Only accessible if authentication passes
    children: [
      {
        path: "",
        element: <Account />, // Protected dashboard
      },
    
    ],
  },
  {
    path: "/admin-panel",
    element: <AdminRoute />, // Only accessible if authentication passes
    children: [
      {
        path: "",
        element: <AdminDash />, // Protected dashboard
      },
    
    ],
  },

  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/shop",
    element: (
      <>
        <Navbar />
        <Shop />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/Login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Signup />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Navbar />
        <Cart />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Navbar />
        <Cart />
      </>
    ),
  },
  
  {
    path: "/buy",
    element: (
      <>
        <Navbar />
        <Buy />
      </>
    ),
  },
  {
    path: "/forgot",
    element: (
      <>
      <Navbar />
        <ForgotPass />
      </>
    ),
  },
]);

function App() {
  // let loc=window.location;

  // const [locState,setLoc]=useState(loc);
  // console.log(loc);
  // if(locState == "http://localhost:5173/"){
  //   console.log("home");
  // }else if(locState == "http://localhost:5173/about"){
  //   console.log("about");
  // }
  // let loc=useLocation();
  let loc = window.location.href;
  // console.log(loc)
  const [state, setState] = useState({ loc });
  const [title, setTitle] = useState({});
  // console.log(state);
  let color = "red";
  const [auth,setAuth]=useAuth();
  const [visible, setVisible] = useState(false)

 
  
  
  return (
    <>
      <FirstContext.Provider value={state}>
        <TitleContext.Provider value={{ title, setTitle }}>
          <VisibleContext.Provider value={{visible, setVisible}}>
          <CartProvider>
     
              <RouterProvider router={router} />,
            <Toaster />
          </CartProvider>
          </VisibleContext.Provider>
        </TitleContext.Provider>
      </FirstContext.Provider>
    </>
  );
}

// import React from 'react'
// import TailwindDemo from './components/try'

// const App = () => {
//   return (
//     <div>
//       <TailwindDemo />
//     </div>
//   )
// }

export default App;
