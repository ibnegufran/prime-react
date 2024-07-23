import React from "react";
import { TitleContext } from "../context/context";
import { useContext, useEffect } from "react";
import Banner from "./Banner";
const Contact = () => {
  const { title, setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle((prev) => ({
      ...prev,
      name: "contact us",
      bg_url: "/public/contact.jpg",
    }));
  }, []);
  return (
    <div>
      <Banner />
      <div className="w-screen bg-gray-100">
        <div className="max-w-[1200px] mx-auto items-center py-8 con-fr justify-center px-4">
          <div className="col1">
            <div className="flex gap-6 my-6">
              <span className="pi pi-envelope text-6xl text-primary-color "></span>
              <div className="">
                <h4 className="text-4xl mb-1 capitalize">Email</h4>
                <p className="text-2xl text-gray-600">abc@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-6 my-6">
              <span className="pi pi-phone text-6xl text-primary-color "></span>
              <div className="">
                <h4 className="text-4xl mb-1 capitalize">phone</h4>
                <p className="text-2xl text-gray-600">124357668</p>
              </div>
            </div>
            <div className="flex gap-6 my-6">
              <span className="pi pi-map-marker text-6xl text-primary-color "></span>
              <div className="">
                <h4 className="text-4xl mb-1 capitalize">address</h4>
                <p className="text-2xl text-gray-600">bhiwandi ,thane </p>
              </div>
            </div>
          </div>
          <div className="col2">
            <h2 className="text-[3rem] capitalize font-bold text-primary-color">contact us</h2>
            <form action="" className="flex flex-col justify-start">
              <input type="text" placeholder="enter your name" className=" w-[80vw] md:w-[40vw] py-3 px-3 text-[1.5rem] rounded shadow-md outline-none my-3 capitalize " />
              <input type="number" placeholder="enter your number" className=" w-[80vw] md:w-[40vw] py-3 px-3 text-[1.5rem] rounded shadow-md outline-none my-3 capitalize " />
              <input type="text" placeholder="enter your subject" className=" w-[80vw] md:w-[40vw] py-3 px-3 text-[1.5rem] rounded shadow-md outline-none my-3 capitalize " />
              <textarea name="message" id="" rows={6} placeholder="enter your message" className=" w-[80vw] md:w-[40vw]  py-3 px-3 text-[1.5rem] rounded shadow-md outline-none my-3 capitalize"></textarea>
              <input type="submit" name="" id="" value={"send"} className="w-[12rem] cursor-pointer bg-primary-color  py-2 px-3 text-3xl mt-4 rounded text-white"/>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
