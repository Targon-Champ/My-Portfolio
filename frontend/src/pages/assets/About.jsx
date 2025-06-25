import React from 'react'
import Image_Frame from './Image_Frame'

function About() {
    const description = "Hello! I’m Sri Immani, a passionate Software Engineer and AI Enthusiast, driven by curiosity and a constant desire to build impactful technology. Currently, I’m pursuing my Master's in Computer Science at Case Western Reserve University, where I’m sharpening my skills in Machine Learning, LLM Applications, and AI-driven software development. I also work as a Graduate Research Assistant, finding relevant existing AI solutions to help improve productivity of faculty members, including building AI Agents with Microsoft Copilot Studio and creating visually appealing sharepoint sites for easy accessibility.";
  return (
   

      <div>
        <h2 className='text-2xl lg:text-3xl font-bold text-[#ADC178] mb-4'>About Me</h2>
        <p className='text-[#DADADA] text-base lg:text-lg leading-relaxed'>
          {description}
        </p>
        <p className='text-[#DADADA] text-base lg:text-lg leading-relaxed mt-4'>
          I have a strong foundation in software development, with experience in full-stack development, machine learning, and AI solutions. My goal is to leverage technology to create innovative solutions that enhance user experiences and drive efficiency.
        </p>
      </div>
    
  )
}

export default About
