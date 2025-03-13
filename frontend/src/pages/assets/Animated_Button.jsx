import React from "react";

function Animated_Button({ text, target }) {
  return (
    <div
      onClick={target}
      className="content-center flex justify-center py-3 lg:py-4 text-[#2d321e] font-bold text-xl md:text-2xs relative mt-5 lg:mt-10 bg-[#ADC178] rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-3xl hover:scale-110 hover:bg-[#ffff] hover:border-2 hover:border-black transform transition-all duration-200"
    >
      <p className="mx-4">{text}</p>
    </div>
  );
}

export default Animated_Button;
