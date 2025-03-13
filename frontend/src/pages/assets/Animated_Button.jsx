import React from "react";

function Animated_Button({ text, target }) {
  return (
    <div className="relative mt-5 lg:mt-10 bg-[#ADC178] rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl hover:scale-125 transform transition-transform duration-300">
      {/* Text Container - Ensures text stays in place */}
      <div className="content-center relative flex justify-center py-3 lg:py-4 text-[#2d321e] font-bold text-xl mx-4 md:text-2xs" onClick={target}>
        {text}
      </div>
    </div>
  );
}

export default Animated_Button;
