import React from "react";
import SideButton from "./assets/SideButton";
import home from './assets/home.svg';
import about from './assets/about.svg';
import experience from './assets/experience.svg';
import skills from './assets/skills.svg';
import projects from './assets/projects.svg';
import contact from './assets/contact.svg';

function Sidebar() {
    const sidebuttons = ["About", "Experience", "Skills", "Projects", "Contact"];
    const images = [about, experience, skills, projects, contact];
  return (
    <section className="bg-[#252323] h-full space-y-5 flex flex-col justify-center">
        <div className="lg:hidden md:hidden"><SideButton content={home} text="HOME"/></div>
        
    {sidebuttons.map((item, index)=>(
        <div id={index}><SideButton content={images[index]} text={item}/></div> 
    ))}

    </section>
  );
}

export default Sidebar;
