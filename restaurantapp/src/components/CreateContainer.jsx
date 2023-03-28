import {useState ,React} from "react";
import {motion} from "framer-motion";
import {MdFastfood} from "react-icons/md"

function CreateContainer() {

  
  const [title, setTitle]= useState(" ");
  const [calories, setCalories]= useState(" ");
  const [price, setPrice]= useState(" ");
  const [category, setCategory]= useState(null);
  const [fields, setFields]= useState(false);
  const [alartStatus, seAlartStatus]= useState("danger ");
  const [msg, seMsg]= useState(null);

  const [isLoading, setIsLoading]= useState(false);




  return (
    <div className="w-full min-h-screen flex items-center justify-center ">
     
      <div className=" w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justfy-center  ">
      {fields && (
        <motion.p
        initial = {{opacity:0}}
        animate = {{opacity:1}}
        exit = {{opacity:0}}
        
         className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
          alartStatus === "danger" ? "bg-red-400 text-red-800":"bg-emerald-400 text-emerald-800"
        } `}>
        {msg}

        </motion.p>
      )}
      <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2 ">
      <MdFastfood />

      </div>
       
      </div>
    </div>
  );
}

export default CreateContainer;
