import copyright from "./assets/copyright.svg";
import django from "./assets/django.svg";
import html from "./assets/html.svg";
import react from "./assets/react.svg";
import tailwind from "./assets/tailwind.svg";

const Footer = () => {
  return (
    <footer className="bg-[#343434] text-white p-4 mt-10 flex justify-between items-center w-full">
      <div className="flex items-center">
        <img src={copyright} alt="" className="w-5 h-5 mr-2" />
        <p className="text-[#535151]">
          {new Date().getFullYear()} All rights reserved to Sri Satya Sai
          Immani.
        </p>
      </div>
      <div className="text-white flex space-x-4">
        <div id="text">Powered by</div>
        <div id="react"><img src={html} alt="HTML_ICON" className="w-5 h-5" /></div>
        <div id="react"><img src={react} alt="REACT_ICON" className="w-5 h-5"/></div>
        <div id="tailwind"><img src={tailwind} alt="TAILWIND_ICON" className="w-5 h-5"/></div>
        <div id="django"><img src={django} alt="DJANGO_ICON" className="w-5 h-5"/></div>
      </div>
    </footer>
  );
};

export default Footer;
