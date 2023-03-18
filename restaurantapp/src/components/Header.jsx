import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

function Header() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };
  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
      {/* Desktop & tablet */}
      <div className=" hidden md:flex w-full h-full items-center justify-between ">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">city</p>
        </Link>
        <div className=" flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >
            <li className="taxt-base text-textColor hover:text-headingColor duration-100">
              Home
            </li>
            <li className="taxt-base text-textColor hover:text-headingColor duration-100">
              Menu
            </li>
            <li className="taxt-base text-textColor hover:text-headingColor duration-100">
              About us
            </li>
            <li className="taxt-base text-textColor hover:text-headingColor duration-100">
              Service
            </li>
          </motion.ul>
          <div className="relative flex items-center justify-center ">
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5  rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              alt="userprofile"
              className="w-10 min-w-[40px] h-10 min-h[40px] drop-shadow-xl cursor-pointer rounded-full"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 flex flex-col bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0 "
              >
                {user && user.email === "adarshmi1234@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-4 py-2 flex items-center cursor-pointer gap-3 hover:bg-slate-100 translate-all duration-100 ease-in-out text-textColor text-base">
                      New Items <MdAdd />
                    </p>
                  </Link>
                )}
                <p className="px-4 py-2 flex items-center cursor-pointer gap-3 hover:bg-slate-100 translate-all duration-100 ease-in-out text-textColor text-base">
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full ">

      <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">city</p>
        </Link>
        <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              alt="userprofile"
              className="w-10 min-w-[40px] h-10 min-h[40px] drop-shadow-xl cursor-pointer rounded-full"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 flex flex-col bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0 "
              >
                {user && user.email === "adarshmi1234@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-4 py-2 flex items-center cursor-pointer gap-3 hover:bg-slate-100 translate-all duration-100 ease-in-out text-textColor text-base">
                      New Items <MdAdd />
                    </p>
                  </Link>
                )}
                <p className="px-4 py-2 flex items-center cursor-pointer gap-3 hover:bg-slate-100 translate-all duration-100 ease-in-out text-textColor text-base">
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
      </div>
    </header>
  );
}

export default Header;
