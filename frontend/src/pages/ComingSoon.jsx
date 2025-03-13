import React from 'react'
import soon_graphic from "./assets/work-in-progress.png"

function ComingSoon() {
  return (
    <section className='flex flex-col '>
        <div className='justify-center flex items-end min-h-screen'>
            <img src={soon_graphic} alt="" className= 'px-10'/>
        </div>  

    </section>
  )
}

export default ComingSoon
