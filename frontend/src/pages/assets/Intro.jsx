import React from "react";
import { TypeAnimation } from "react-type-animation";
import linkedin from "./media/linkedin.svg";
import github from "./media/github.svg";
import twitter from "./media/x.svg"; //X icon by Icons8
import facebook from "./media/facebook.svg";
import leetcode from "./media/leetcode.svg"; //Leetcode Icon by Icon 54 on IconScout
import Animated_Button from "./Animated_Button";
import { Link } from "react-router-dom";
import resume from "./media/Resume.pdf";
function Intro() {
  const linkedin_link = "https://www.linkedin.com/in/immanisrisatyasai/";
  const github_link = "https://github.com/Targon-Champ";
  const leetcode_link = "https://leetcode.com/u/Taragon_champ/";
  const twitter_link = "https://x.com/SriSatyaSaiI";
  const facebook_link =
    "https://www.facebook.com/profile.php?id=100025661940907";

  const handleDownload = () => {
    const pdfUrl = resume;

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "SriSatyaSaiImmani.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <h1 className="text-5xl font-bold leading-[3rem] text-[#ADC178] md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
        Hello,
        <br />
        This is <span className="text-[#6C584C]">SATYA IMMANI,</span> <br />
        I'm a Professional
        <br />
        <span className="text-[#ffff]" id="role">
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              1000,
              "ML Engineer",
              1000,
              "Software Engineer",
              1000,
              "ServiceNow Developer",
              2000,
            ]}
            wrapper="span"
            speed={25}
            repeat={Infinity}
          />
        </span>
        
      </h1>
      <div className="flex flex-row  mt-5 lg:mt-10 space-x-3 lg:space-x-6">
        <div className="rounded-full lg:h-12 lg:w-12 h-6 w-6 transform transition-transform duration-300 hover:scale-125">
          <a href={linkedin_link} target="_blank">
            <img src={linkedin} alt="LinkedIn_Icon" />
          </a>
        </div>
        <div className="rounded-full lg:h-12 lg:w-12 h-6 w-6 transform transition-transform duration-300 hover:scale-125">
          <a href={github_link} target="_blank">
            <img src={github} alt="Github_Icon" />
          </a>
        </div>
        <div className="rounded-full lg:h-12 lg:w-12 h-6 w-6 transform transition-transform duration-300 hover:scale-125">
          <a href={leetcode_link} target="_blank">
            <img src={leetcode} alt="Leetcode_Icon" />
          </a>
        </div>
        <div className="rounded-full lg:h-12 lg:w-12 h-6 w-6 transform transition-transform duration-300 hover:scale-125">
          <a href={twitter_link} target="_blank">
            <img src={twitter} alt="Twitter_Icon" />
          </a>
        </div>
        <div className="rounded-full lg:h-12 lg:w-12 h-6 w-6 transform transition-transform duration-300 hover:scale-125">
          <a href={facebook_link} target="_blank">
            <img src={facebook} alt="FaceBook_Icon" />
          </a>
        </div>
      </div>
      <div className="mt-5 lg:mt-10 flex flex-row space-x-6 lg:space-x-12">
        {/* <Link to="contactme">
          <Animated_Button text="CONTACT ME" />
        </Link> */}

        <Animated_Button text="GET MY RESUME" target={handleDownload} />
      </div>
    </>
  );
}

export default Intro;
