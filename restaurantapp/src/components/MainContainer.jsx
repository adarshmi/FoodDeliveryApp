import React from "react";
import Delivery from "../img/delivery.png";

function MainContainer() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
      <div
        className="py-2 flex-1 flex flex-col  
      items-start justify-center gap-6"
      >
        <div
          className=" flex items-center justify-center gap-2
         bg-orange-100 px-4 py-1 rounded-full"
        >
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div
            className="w-8 h-8 bg-white rounded-full overflow-hidden
          drop-shadow-xl "
          >
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] md:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in <span className="text-orange-600 text-[3rem]">Your city</span>
        </p>
        <p className="text-base text-textColor text-center md:text-left">
        Magna consectetur fugiat laboris Lorem aliquip ea cupidatat ipsum sit reprehenderit aliquip. Eu minim ad minim consectetur. Adipisicing irure dolore ex duis enim labore qui reprehenderit deserunt anim dolore duis ullamco aliquip. Deserunt aute dolor ea id officia aliqua excepteur. Fugiat elit non deserunt voluptate consequat dolor do Lorem voluptate Lorem. Tempor incididunt irure aliqua culpa cillum sint et ipsum nostrud.
        </p>

        <button type="button" className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 "> Order Now </button>



      </div>
      <div className="py-2 bg-blue-400 flex-1"></div>
    </div>
  );
}

export default MainContainer;
