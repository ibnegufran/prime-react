import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
// import { AuthContext } from '../context/context';
import { useAuth } from "../context/authContext";

const Navbar = () => {
  const logoutHandler = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };

  const [toggle, setToggle] = useState(false);
  const [userClick, setUserClick] = useState(false);

  const [scrollToggle, setScrollToggle] = useState(false);
  const [windowToggle, setWindowToggle] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  const handleWindowClick = () => {
    // setWindowToggle(true);
  };
  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Perform any condition based on the scroll position
    if (scrollPosition > 40) {
      setScrollToggle(true);
    } else {
      setScrollToggle(false);
    }
  }, [scrollPosition]);

  const { totalUniqueItems } = useCart();
  // const user=JSON.stringify(auth.user);
  // console.log(auth.user.name)
  const [auth, setAuth] = useAuth();
  const data = JSON.parse(localStorage.getItem("auth"));
  return (
    <>
      <div
        className={`z-50 w-[100vw] py-2 px-6 justify-content-between bg-white border-bottom-1 border-300  flex align-items-center md:justify-content-around  ${
          scrollToggle == true ? "fixed top-0 left-0" : "relative"
        }`}
      >
        <div
          className={`${
            userClick ? "inline-block" : "hidden"
          } account-detail absolute top-[105%] right-[15%] bg-white py-4 px-6 rounded-xl`}
        >
          {data && data.user ? (
            <>
              <p className="text-[1.6rem] text-center ">
                Hi{" "}
                <span className="px-2 text-[1.6rem] text-center text-primary-color">
                  {data.user === null ? "" : data.user.name}
                </span>
              </p>
              <p className="text-[1.6rem] text-center lowercase">
                {data.user === null ? "" : data.user.email}
              </p>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="">
          <h1
            className={`uppercase text-[2.5rem] font-bold  text-primary-color  `}
          >
            al-kahf
          </h1>
          <span className="text-2xl italic text-[#763BA7]">online market</span>
        </div>
        <div
          className={`absolute  text-white  ${
            toggle == false || scrollToggle == true
              ? "top-[-100vw]"
              : "top-[99%]"
          }  text-3xl left-0 gap-6 p-4 flex items-start bg-[rgba(0,0,0,.3)] w-screen  flex-col md:relative md:flex md:top-0 md:items-center md:flex-row  md:gap-8 md:text-2xl capitalize transition-all duration-1000 md:bg-white md:p-0 md:text-black md:w-auto `}
        >
          <Link
            to="/"
            className="no-underline hover:text-black md:hover:text-gary300 md:text-black"
          >
            home
          </Link>
          <Link
            to="/about"
            className="no-underline hover:text-black md:hover:text-gary300 md:text-black"
          >
            about
          </Link>
          <Link
            to="/shop"
            className="no-underline hover:text-black md:hover:text-gary300 md:text-black"
          >
            shop
          </Link>
          <Link
            to="/contact"
            className="no-underline hover:text-black md:hover:text-gary300 md:text-black"
          >
            contact us
          </Link>
          {!auth.user ? (
            <>
              <Link
                to="/signup"
                className="no-underline hover:text-black md:hover:text-gary300 md:text-black"
              >
                register
              </Link>
              <Link
                to="/Login"
                className="no-underline hover:text-black md:hover:text-gary300 md:text-black"
              >
                login
              </Link>
            </>
          ) : auth.user.role == 1 ? (
            <Link
              to="/admin-panel"
              className="no-underline hover:text-black md:hover:text-gary300 md:text-black"
            >
              Admin-panel
            </Link>
          ) : (
            <Link
              to="/account"
              className="no-underline hover:text-black md:hover:text-gary300 md:text-black"
            >
              Account
            </Link>
          )}
        </div>
        <div className="icons ">
          <span
            className={`pi pi-align-justify inline-block text-2xl mx-3 md:hidden cursor-pointer`}
            onClick={() => {
              setToggle(!toggle);
            }}
          ></span>

          <span className="pi pi-search text-2xl mx-3 cursor-pointer"></span>
          {!auth.user ? (
            <>
              <p></p>
            </>
          ) : (
            <>
              <Link to="/cart">
                {" "}
                <span className="pi pi-cart-arrow-down text-2xl ml-2  cursor-pointer"></span>{" "}
                <span className="mr-2 text-2xl ">({totalUniqueItems})</span>{" "}
              </Link>
              <span
                className="pi pi-user text-2xl mx-3 cursor-pointer"
                onClick={() => setUserClick(!userClick)}
              ></span>
              <Link
                to="/Login"
                className="text-[1.3rem] mx-3 cursor-pointer bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={logoutHandler}
              >
                logout
              </Link>
            </>
          )}
        </div>
      </div>
      <Link
        to="https://wa.me/7507485880"
        className="shadow-xl  bg-white p-4 rounded-full fixed top-[70%] md:top-[90%] right-[8%] border-1 border-gray-300  z-50"
      >
        <span className="pi pi-whatsapp  text-4xl text-[#075E54]"></span>
      </Link>
    </>
  );
};

export default Navbar;
