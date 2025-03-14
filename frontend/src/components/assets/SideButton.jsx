import React from "react";

function SideButton({ content, text}) {
  return (

    <div
      id="HOME"
      className="flex flex-row px-4 py-2 text-[#ADC178] transition-all duration-300 hover:text-[#6C584C] hover:scale-110 font-bold text-xl lg:text-3xl"
    >
      <img src={content} alt="" className="w-10 h-10"/>  <p className="font-mono">{text.toUpperCase()}</p>
    </div>

  );
}

export default SideButton;
