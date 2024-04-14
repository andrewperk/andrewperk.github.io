import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

function Hero() {
  return (
    <div name="hero" className="w-full h-screen bg-[#0a192f]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p>Hi, my name is</p>
            <h1>Andrew Perkins</h1>
            <p>I'm a front-end developer specializing in building awesome digital experiences. Currently, I'm focused on building responsive front-end web apps.</p>
            <div>
                <button>View Work <HiArrowNarrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default Hero