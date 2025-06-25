import { Link } from "react-router-dom";
import home from './assets/home.svg';
import about from './assets/about.svg';
import experience from './assets/experience.svg';
import skills from './assets/skills.svg';
import projects from './assets/projects.svg';
import contact from './assets/contact.svg';
const Navbar = () => {
  const contents = ["ABOUT", "EXPERIENCE", "EDUCATION", "PROJECTS", "CONTACT"
  ];
  const images = [about, experience, skills, projects, contact];

  return (
    <nav class="bg-transparent">
      <div class="flex items-center justify-between py-5">
        <div class="flex flex-shrink-0 items-center">
          <a class=" text-[#3F926B] text-3xl font-bold" href="/"></a>
        </div>
        <ul
          class="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <a href="/My-Portfolio/">
              <div
                id="HOME"
                className="flex flex-row px-4 py-2 text-[#ADC178] transition-all duration-300 hover:text-[#6C584C] hover:scale-110 font-bold lg:text-2xl md:text-xl sm:text-lg text-base"
              >
                <img src={home} alt="" className="w-8 h-7"/>  <p className="font-mono">HOME</p>
              </div>
            </a>
          </li>
          {contents.map((item, index) => (
            <li>
              <a jump-to={item.toLowerCase()}>
                <div
                  id={index}
                  className="flex flex-row px-4 py-2 text-[#ADC178] transition-all duration-300 hover:text-[#6C584C] hover:scale-110 font-bold lg:text-2xl md:text-xl sm:text-lg text-base"
                >
                  <img src={images[index]} alt="" className="w-8 h-7"/>  <p className="font-mono">{item}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
