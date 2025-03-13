import React from "react";
import SideButton from "./assets/SideButton";

function Sidebar() {
    const sidebuttons = ["About", "Experience", "Skills", "Projects", "Contact Me"];
  return (
    <section className="bg-[#252323] h-full space-y-5 flex flex-col justify-center">
        <div className="lg:hidden md:hidden"><SideButton content="Home" ></SideButton></div>
        
    {sidebuttons.map((item, index)=>(
        <div id={index}><SideButton content={item}/></div> 
    ))}

    </section>
  );
}

export default Sidebar;
