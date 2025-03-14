import Editor from "./assets/Editor";
import Intro from "./assets/Intro";
import { useEffect, useState } from "react";
import phone from "./assets/media/phone.svg"


const Home = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(()=>{
    const checkScreenSize = () => {
      const width= window.innerWidth;
      if (width < 1024){
        setShowMessage(true);
      }
      else{
        setShowMessage(false);
      }
    };
    checkScreenSize();

    // window.addEventListener("resize", checkScreenSize);

    // return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  


  return (
    <section className="mx-10 relative flex flex-col items-center justify-between py-4 lg:py-12 px-5 lg:px-10">
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#F0EAD2] p-6 rounded-lg shadow-xl transform transition-all scale-95 animate-fadeIn">
            <div className="flex flex-col items-center text-center">
            <img src={phone} alt="Phone Icon" className="w-16 h-16 mb-3" />
              <h2 className="text-xl font-semibold text-gray-800">
                 Mobile View Alert
              </h2>
              {/* </div>
              <div className="flex flex-col items-center text-center"> */}
              <p className="mt-2 text-gray-600">
                You are viewing this on a mobile or tablet.
              </p>
              <button
                className="mt-4 px-6 py-2 bg-[#6C584C] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                onClick={() => setShowMessage(false)}
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 text-[#ADC178] w-full">
        <div className="order-1 lg:order-2 p-5 flex flex-col">
          <Intro></Intro>
        </div>

        <div className="order-2 lg:order-1 bg-[#2F2F2F] border-[#1b2c68a0] relative rounded-lg">
          <Editor></Editor>
        </div>
      </div>
    </section>
  );
};

export default Home;



