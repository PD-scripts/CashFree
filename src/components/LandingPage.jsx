import { motion } from 'framer-motion'
import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

const LandingPage = () => {
  return (
    <div 
      data-scroll 
      data-scroll-speed="-.3"
      className='w-full min-h-screen bg-zinc-700 border-t-2 py-10 relative '
    >
      
      <div className='textstructure mt-52 px-20'>
        {["we build","scalable  payment", "infrastructure"].map((item,index)=>{
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-center">
                
                {index===1 && (
                  <motion.div 
                    initial={{width:0}}
                    animate={{width:"9vw"}}
                    transition={{ease:[0.75,0,0.24,1],duration:2.5}}
                    className="mr-[1vw] w-[9vw] rounded-md h-[6vw] bg-red-500 relative"
                  />
                )}

                <h1 className="uppercase text-[6vw] leading-[7vw] tracking-tighter font-['Founders_Grotesk'] font-medium">
                  {item}
                </h1>

              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-2 border-zinc-800 mt-16 flex justify-between items-center py-6 px-20 pb-16">

        {["Trusted by startups and enterprises" , "from first transaction to global scale"].map((item,index)=>(
          <p key={index} className='text-md font-light leading-none py-2'>{item}</p>   
        ))}

        <div className='start flex items-center gap-5'>
          <div className='px-4 py-2 border-[1px] border-zinc-300 rounded-full font-light text-md uppercase'>
            get started
          </div>
        </div>

        <div className="w-10 h-10 border-[2px] flex items-center justify-center border-zinc-500 rounded-full">
          <span className='rotate-[45deg]'>
            <FaArrowUpLong/>
          </span>
        </div>

      </div>

    </div>
  )
}

export default LandingPage