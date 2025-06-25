
import Intro from "./assets/Intro";
import sideimage from "./assets/media/sidephoto.png";
import About from "./assets/About";
import about from "./assets/media/about.png";
import Image_Frame from "./assets/Image_Frame";


const Home = () => {
  return (<>
    <section id="home" className="mx-10 relative flex flex-col items-center justify-between py-4 lg:py-12">


<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-12 items-center text-[#ADC178] w-full">
  
  {/* Text Section */}
  <div className="order-2 lg:order-1 p-5 flex flex-col justify-center">
    <Intro />
  </div>
  
{/* Image Section with Wavy Shape */}
<div className="order-1 lg:order-2 justify-center relative w-full max-w">

 <Image_Frame />
  
    <img 
      src={about} 
      alt="Profile Illustration" 
      className="w-full h-auto object-cover" 
      style={{ clipPath: "url(#roundedBlobClip)" }} 
    />
</div>
</div>

    </section>
 <section id="about" className="mx-10 relative flex flex-col items-center justify-between py-4 lg:py-12">


<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-12 items-center text-[#ADC178] w-full">
  
  {/* Text Section */}
  <div className="order-2 lg:order-2 p-5 flex flex-col justify-center">
    <About />
  </div>
  
{/* Image Section with Wavy Shape */}
<div className='lg:order-1 order-2 justify-center relative w-full max-w-xl flex'>
  <Image_Frame />
  <img
    src={sideimage}
    alt='Profile'
    className='w-full h-auto object-cover mx-auto'
    style={{ clipPath: 'url(#roundedBlobClip)' }}
  />
</div>
</div>
    </section>

    </>
  );
};


export default Home;



