import React from "react";
import HomeContainer from "./HomeContainer";


function MainContainer() {
  return (
    <div className=" w-full h-auto flex flex-col items-center justify-center ">
     <HomeContainer />
     <section className="w-full ">
     <div className="w-full flex items-center justify-between">
     <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 transition-all ease-in-out duration-100">
      Our fresh & healthy fruits 
     </p>

     </div>

     </section>
    </div>
  );
}

export default MainContainer;
