import React from "react";

function SideButton({ content, text}) {
  return (

    <div
      id="HOME"
      className={`flex flex-row px-4 py-2 text-[#F0EAD2] transition-all duration-300 hover:text-black font-bold hover:scale-110 sm:text-xs md:text-base lg:text-xl items-center`}
    >
      <img src={content} alt="" className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-10 lg:h-10"/>  <p className="font-mono hover:rotate-5">{text.toUpperCase()}</p>
    </div>

  );
}

export default SideButton;
