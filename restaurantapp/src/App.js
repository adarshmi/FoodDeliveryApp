import React, { useState } from "react";
import { Await, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { MainContainer, Header, CreateContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunction";
import { useEffect } from "react";
import { actionType } from "./context/reducer";

function App() {
  
  const[{foodItems},dispatch] = useStateValue();

  const fetchData = async ()=>{
    await getAllFoodItems().then(data =>{
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems:data
      })
    });
  };

  useEffect(()=>{
    fetchData();
  },[]);


  return (
    <AnimatePresence  >
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-14 md:mt-24 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
