import React from 'react'

function Image_Frame() {
  return (<>
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
      <defs>
        <clipPath id="roundedBlobClip" clipPathUnits="objectBoundingBox">
          <path d="M0.05,0.2 
  C0.05,0.1 0.1,0.05 0.2,0.05 
  L0.8,0.05 
  C0.9,0.05 0.95,0.1 0.95,0.2 
  L0.95,0.8 
  C0.95,0.9 0.9,0.95 0.8,0.95 
  L0.2,0.95 
  C0.1,0.95 0.05,0.9 0.05,0.8 
  Z
  " />
        </clipPath>
      </defs>
    </svg>

  </>
  )
}

export default Image_Frame
