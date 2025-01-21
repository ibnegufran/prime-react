import React, { useState } from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import { useAuth } from "../../context/authContext";
import OrderInfo from "./OrderInfo";
import AddProduct from "./AddProduct";
import Users from "./Users";
import Mesages from "./Mesages";
import AllProducts from "./AllProducts";

const AdminDash = () => {
  const [auth, setAuth] = useAuth();
  const [tabChange,setTabChange]=useState("order");
  return (
    <div className="w-[100vw]">
      <Navbar />
      <div className=" w-full  min-h-[92vh]   p-0 flex ">
        <div className="sidebar   md:w-[20vw]  border-r-2">
          <h1 className="text-[3.5rem] py-4 w-[80%] mx-auto font-bold text-primary-color">
            admin panel
          </h1>
          <div className="tabs  flex w-[80%] mx-auto text-left flex-column">
            
            <Link
              to="/admin-panel"
              className={`no-underline py-2 px-3 rounded-md hover:text-black md:hover:text-gary300 ${tabChange == "order" ? "bg-primary-color text-white" : "bg-transparent text-black"} text-[1.6rem] my-3 text-left `}
              onClick={()=>setTabChange("order")}
            >
              order info
            </Link>
            <Link
              to="/admin-panel"
              className={`no-underline py-2 px-3 rounded-md hover:text-black md:hover:text-gary300 ${tabChange == "addProducts" ? "bg-primary-color text-white" : "bg-transparent text-black"} text-[1.6rem] my-3 text-left md:text-black`}
               onClick={()=>setTabChange("addProducts")}
            >
              add products
            </Link>
            <Link
              to="/admin-panel"
              className={`no-underline py-2 px-3 rounded-md hover:text-black md:hover:text-gary300 ${tabChange == "users" ? "bg-primary-color text-white" : "bg-transparent text-black"} text-[1.6rem] my-3 text-left md:text-black`}
               onClick={()=>setTabChange("users")}
            >
              users
            </Link>
            <Link
              to="/admin-panel"
              className={`no-underline py-2 px-3 rounded-md hover:text-black md:hover:text-gary300 ${tabChange == "message" ? "bg-primary-color text-white" : "bg-transparent text-black"} text-[1.6rem] my-3 text-left md:text-black`}
               onClick={()=>setTabChange("message")}
            >
              messages
            </Link>
            <Link
              to="/admin-panel"
              className={`no-underline py-2 px-3 rounded-md hover:text-black md:hover:text-gary300 ${tabChange == "allProducts" ? "bg-primary-color text-white" : "bg-transparent text-black"} text-[1.6rem] my-3 text-left md:text-black`}
               onClick={()=>setTabChange("allProducts")}
            >All products</Link>
          </div>
        </div>

        {/* content */}
        <div className=" md:w-[90vw]  block h-auto">
          {/* <div className="absolute top-[20%] right-[10%] text-center">
            <p className="pi pi-user text-4xl mx-3 "></p>
            <p>{auth.user.name}</p>
            <p className="normal-case">{auth.user.email}</p>
          </div> */}
          {
              tabChange == "order"  ? (
                <OrderInfo />
              ) : tabChange == "addProducts" ? (
                <AddProduct />
              ) : tabChange == "users" ? (
                <Users />
              )  : tabChange == "allProducts" ? (
                <AllProducts tabChange={tabChange}/>

              ) :(
                <Mesages />
              ) 
            }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDash;
