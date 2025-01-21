import axios from "axios";
import Input from "postcss/lib/input";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import Navbar from "./navbar";
const Signup = () => {
  const navigate = useNavigate();
  let btn = {
    paddingLeft: "2rem",
    fontSize: "5rem",
  };
  const notify = () => toast.success('Here is your toast.', {
    duration: 2000,
    position: 'top-center',
  
    // Styling
    className: 'text-[1.5rem]',
  });
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const obj = Object.fromEntries(formData);
      console.log(obj);
      const { name, email, password, phone, address ,answer,role} = obj;
      console.log( name, email, password, phone, address,role);
      const res = await axios.post("http://localhost:8080/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
        role
      });
      if (res.data.success) {
        toast.success(res.data.message, {
          duration: 2000,
          position: 'top-center',
          className: 'text-[1.5rem]',
        });
        navigate("/Login");
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong", {
        duration: 2000,
        position: 'top-center',
        className: 'text-[1.5rem]',
      });
    }
  };
  return (
    <>
    <Navbar />
    <div className="h-screen w-screen  grid place-items-center justify-center">
      <form
        className="bg-white shadow:md py-4 px-6 text-center flex flex-col items-center gap-5 rounded-md shadow-sm border-1 border-gray-300"
        onSubmit={submitHandler}
      >
        <h2 className="text-[3.5rem] text-primary-color capitalize font-bold">
          sign up!
        </h2>
        <input required
          type="text"
          placeholder="Enter Your Name"
          className=" w-[70vw] normal-case md:w-[40vw] py-3 px-3 text-[1.5rem] border-1 border-gray-100 outline-none rounded shadow-md"
          name="name"
        />
        <input required
          type="email"
          placeholder="Enter Your email"
          className=" w-[70vw] normal-case md:w-[40vw] py-3 px-3 text-[1.5rem] border-1 border-gray-100 outline-none rounded shadow-md"
          name="email"
        />
        <input required
          type="password"
          placeholder="Enter Your password"
          className=" w-[70vw] normal-case md:w-[40vw] py-3 px-3 text-[1.5rem] border-1 border-gray-100 outline-none rounded shadow-md"
          name="password"
        />
        <input required
          type="number"
          placeholder="Enter Your phone"
          className=" w-[70vw] normal-case md:w-[40vw] py-3 px-3 text-[1.5rem] border-1 border-gray-100 outline-none rounded shadow-md"
          name="phone"
        />
        <input required
          type="text"
          placeholder="Enter Your address"
          className=" w-[70vw] normal-case md:w-[40vw] py-3 px-3 text-[1.5rem] border-1 border-gray-100 outline-none rounded shadow-md"
          name="address"
        />
          <input required
          type="text"
          placeholder="Enter Your favorite game (this will you to reset password)"
          className=" w-[70vw] normal-case md:w-[40vw] py-3 px-3 text-[1.5rem] border-1 border-gray-100 outline-none rounded shadow-md"
          name="answer"
        />
        <select 
          name="role"
          id=""
          className=" w-[70vw] normal-case md:w-[40vw] py-3 px-3 text-[1.5rem] border-1 border-gray-100 outline-none rounded shadow-md"
        >
          <option value="" disabled>
            select user type
          </option>

          <option value="0">user</option>
          <option value="1">admin</option>
        </select>
        <input
          type="submit"
          id="btn"
          value={"sign Up"}
          className="bg-primary-color  text-[1.8rem] border-0 border-gray-100 shadow-md text-white rounded-lg font-bold "
        />
          <p className='text-[1.6rem] my-4 text-gray-800 tracking-wider'>already have an account ? <Link to='/Login' className='text-[1.6rem] my-4 text-primary-color underline tracking-wider'>login now</Link></p>
      </form>
      {/* <div>
      <button onClick={notify}>Make me a toast</button>
    </div> */}
    </div>
    </>
  );
};

export default Signup;
