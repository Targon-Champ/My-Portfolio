import { useNavigate } from "react-router-dom";
const Navbar = () => {

  const navigate = useNavigate()

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
            <a
              class="block px-4 py-2 no-underline outline-none hover:no-underline"
              href=""
            >
              <div class="text-sm text-[#ADC178] transition-colors duration-300 hover:text-[#6C584C] font-bold" onClick={()=>navigate("/My-Portfolio/")}>
                HOME
              </div>
            </a>
          </li>
          <li>
            <a
              class="block px-4 py-2 no-underline outline-none hover:no-underline"
              href=""
            >
              <div class="text-sm text-[#ADC178] transition-colors duration-300 hover:text-[#6C584C] font-bold" onClick={()=>navigate("/My-Portfolio/About")}>
                ABOUT
              </div>
            </a>
          </li>
          <li>
            <a
              class="block px-4 py-2 no-underline outline-none hover:no-underline"
              href=""
            >
              <div class="text-sm text-[#ADC178] transition-colors duration-300 hover:text-[#6C584C] font-bold" onClick={()=>navigate("/My-Portfolio/Experience")}>
                EXPERIENCE
              </div>
            </a>
          </li>
          <li>
            <a
              class="block px-4 py-2 no-underline outline-none hover:no-underline"
              href=""
            >
              <div class="text-sm text-[#ADC178] transition-colors duration-300 hover:text-[#6C584C] font-bold" onClick={()=>navigate("/My-Portfolio/Skills")}>
                SKILLS
              </div>
            </a>
          </li>
          <li>
            <a
              class="block px-4 py-2 no-underline outline-none hover:no-underline"
              href=""
            >
              <div class="text-sm text-[#ADC178] transition-colors duration-300 hover:text-[#6C584C] font-bold" onClick={()=>navigate("/My-Portfolio/Projects")}>
                PROJECTS
              </div>
            </a>
          </li>
          <li>
            <a
              class="block px-4 py-2 no-underline outline-none hover:no-underline"
              href=""
            >
              <div class="text-sm text-[#ADC178] transition-colors duration-300 hover:text-[#6C584C] font-bold" onClick={()=>navigate("/My-Portfolio/Education")}>
                EDUCATION
              </div>
            </a>
          </li>
          <li>
            <a
              class="block px-4 py-2 no-underline outline-none hover:no-underline"
              href=""
            >
              <div class="text-sm text-[#ADC178] transition-colors duration-300 hover:text-[#6C584C] font-bold" onClick={()=>navigate("/My-Portfolio/Testimonials")}>
                TESTIMONIALS
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
