import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div>
      <div data-scroll data-scroll-section data-scroll-speed='.5' className=" w-full py-20 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43]">
        <div className="text border-t-2  border-b-2 border-zinc-300 gap-10 overflow-hidden flex whitespace-nowrap">
       <motion.h1 
  initial={{x:0}} 
  animate={{x:'-100%'}} 
  transition={{ease: "linear" , repeat: Infinity , duration:17}} 
  className='text-[12vw] leading-none font-["Founders_Grotesk"]  uppercase pt-10 '
>
  Your Business is
One of a Kind...
Your Payments Should Be Too
</motion.h1>
        </div>
      </div>
    </div>
  )
}

export default Marquee
