import { Link } from "react-router-dom";
import home from './assets/home.svg';
const Navbar = () => {
  const contents = [
  ];

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
            <Link to="">
              <div
                id="HOME"
                className="flex flex-row px-4 py-2 text-[#ADC178] transition-all duration-300 hover:text-[#6C584C] hover:scale-110 font-bold text-4xl"
              >
                <img src={home} alt="" className="w-10 h-10"/>  <p className="font-mono">HOME</p>
              </div>
            </Link>
          </li>
          {contents.map((item, index) => (
            <li>
              <Link to={`${item.toLowerCase()}`}>
                <div
                  id={index}
                  className="lg:text-xl block px-4 py-2 text-sm text-[#ADC178] transition-colors duration-300 hover:text-[#6C584C] font-bold"
                >
                  {item}
                </div>
              </Link>
            </li>
          ))}
          {/* <li>
            <div
              class="block px-4 py-2 text-sm text-[#ADC178] transition-colors duration-300 hover:text-[#6C584C] font-bold"
              onClick={() => navigate("/My-Portfolio/")}
            >
              HOME
            </div>
          </li>
          <li>
            <div
              class="block px-4 py-2 text-sm text-[#ADC178] transition-colors duration-300 hover:text-[#6C584C] font-bold"
              onClick={() => navigate("/My-Portfolio/About")}
            >
              ABOUT
            </div>
          </li>
          <li>
            <div
              class="block px-4 py-2 text-sm text-[#ADC178] transition-colors duration-300 hover:text-[#6C584C] font-bold"
              onClick={() => navigate("/My-Portfolio/Experience")}
            >
              EXPERIENCE
            </div>
          </li>
          <li>
            <div
              class="block px-4 py-2 text-sm text-[#ADC178] transition-colors duration-300 hover:text-[#6C584C] font-bold"
              onClick={() => navigate("/My-Portfolio/Skills")}
            >
              SKILLS
            </div>
          </li>
          <li>
            <div
              class="block px-4 py-2 text-sm text-[#ADC178] transition-colors duration-300 hover:text-[#6C584C] font-bold"
              onClick={() => navigate("/My-Portfolio/Projects")}
            >
              PROJECTS
            </div>
          </li>
          <li>
            <div
              class="block px-4 py-2 text-sm text-[#ADC178] transition-colors duration-300 hover:text-[#6C584C] font-bold"
              onClick={() => navigate("/My-Portfolio/Education")}
            >
              EDUCATION
            </div>
          </li>
          <li>
            <div
              class="block px-4 py-2 text-sm text-[#ADC178] transition-colors duration-300 hover:text-[#6C584C] font-bold"
              onClick={() => navigate("/My-Portfolio/Testimonials")}
            >
              TESTIMONIALS
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
