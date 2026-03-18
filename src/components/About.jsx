import React, { useState } from 'react'
import { motion } from 'framer-motion'

const About = () => {

  // ✅ Card Component
  const Card = ({ icon, title, desc, more }) => {
    const [open, setOpen] = useState(false);

    return (
      <div className='w-1/2 p-6 bg-white/60 rounded-2xl transition duration-300 hover:shadow-xl hover:-translate-y-2'>
        
        <img src={icon} alt="" className='w-12 mb-6' />

        <h2 className='text-xl font-semibold mb-3'>
          {title}
        </h2>

        <p className='text-sm text-zinc-700 mb-3'>
          {desc}
        </p>

        {open && (
          <p className='text-sm text-zinc-600 mb-4'>
            {more}
          </p>
        )}

        <button 
          onClick={() => setOpen(!open)}
          className='text-sm font-medium text-blue-600'
        >
          {open ? "Learn Less ↑" : "Learn More →"}
        </button>

      </div>
    );
  };

  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed='1.2'
      className='w-full pt-20 pb-16 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black relative z-20'
    >

      <div className="w-full flex items-center gap-16">

  {/* LEFT TEXT */}
  <div className="w-1/2 max-w-3xl">

    <h4 className="text-sm uppercase tracking-widest text-zinc-700 mb-4">
      Payment Infrastructure
    </h4>

    <h1 className="font-['Neue_Montreal'] text-[2.5vw] leading-[1.2] font-semibold mb-6">
      Build seamless onboarding and secure transactions at scale
    </h1>

    <p className="text-lg text-zinc-800 leading-relaxed">
      Enable high-performance payment experiences with a robust and scalable 
      infrastructure designed for modern businesses. From onboarding to 
      transaction processing, ensure speed, reliability, and compliance 
      across millions of users and global markets. Optimize every step 
      of the payment journey while maintaining security and efficiency.
    </p>

  </div>

  {/* RIGHT IMAGE */}
  <div className="w-1/2 flex justify-center">

    <img 
      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
      alt="payments"
      className="rounded-2xl w-[90%] object-cover shadow-xl"
    />

  </div>
</div>

      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        
        {/* LEFT */}
        <div className='w-1/2'>
          <h1 className='text-6xl px-10'>Tools to Help You Scale</h1>

          <motion.button 
            whileHover="hover"
            whileTap="tap"
            className='flex items-center gap-6 uppercase px-8 m-10 py-6 bg-zinc-900 rounded-full text-white'
          >
            Explore Solutions

            <motion.span
              variants={{
                hover: { scale: 1.8 },
                tap: { scale: 1.4 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className='w-3 h-3 bg-white rounded-full'
            />
          </motion.button>
        </div>

        {/* RIGHT - CARDS */}
        <div className='w-1/2 flex gap-5'>

          <Card 
            icon="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            title="Intelligent Checkout"
            desc="Customize checkout flows with OTP login and faster payments."
            more="Leverage saved customer data and reduce friction across devices."
          />

          <Card 
            icon="https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
            title="Higher Conversions"
            desc="Recover abandoned carts with smart automation."
            more="Use targeted offers and WhatsApp reminders to boost revenue."
          />

        </div>

      </div>
    </div>
  )
}

export default About