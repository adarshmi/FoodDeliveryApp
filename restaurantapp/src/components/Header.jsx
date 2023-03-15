import React from "react";
import { MdShoppingBasket } from "react-icons/md";
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

  const [ user, dispatch] = useStateValue();

  const login = async () => {
    const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
  };
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* Desktop & tablet */}
      <div className=" hidden md:flex w-full h-full items-center justify-between ">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">city</p>
        </Link>
        <div className=" flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
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
          </ul>
          <div className="relative flex items-center justify-center ">
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5  rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Avatar}
              alt="userprofile"
              className="w-10 min-w-[40px] h-10 min-h[40px] drop-shadow-xl cursor-pointer"
              onClick={login}
            />
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full "></div>
    </header>
  );
}

export default Header;