import React from 'react'

const Cards = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 px-32 py-20'>

      {/* 🔥 SECTION HEADING */}
      <div className='mb-16'>
        <h1 className='text-6xl font-["Neue_Montreal"] text-white mb-6'>
          Tools to Power Your Growth
        </h1>

        <p className='text-zinc-400 text-lg max-w-2xl'>
          Build faster, scale seamlessly, and optimize every transaction
          with a robust payment infrastructure designed for modern businesses.
        </p>
      </div>

      {/* CARDS ROW */}
      <div className='flex gap-5 items-center'>

        {/* LEFT BIG CARD */}
        <div className='cardcontainer h-[50vh] w-1/2'>
          <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex flex-col justify-between p-10'>

            <img 
              className='w-16' 
              src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
              alt=""
            />

            <div className='flex flex-col gap-3'>
              <h2 className='text-2xl font-bold text-white mt-2'>
                Smart Checkout Flow
              </h2>

              <p className='text-sm text-zinc-200 leading-relaxed'>
                Optimize your checkout experience with faster authentication,
                seamless payment options, and reduced drop-offs across devices.
              </p>
            </div>

            <button className='px-5 py-2 rounded-full border border-white text-white w-fit'>
              Learn More →
            </button>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>

          {/* CARD 2 */}
          <div className='card relative rounded-xl flex flex-col justify-between w-full h-full bg-[#192826] p-10'>
            
            <img 
              className='w-16' 
              src="https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
              alt=""
            />

            <div className='flex flex-col gap-2'>
              <h2 className='text-xl font-bold text-white mt-2'>
                Conversion Engine
              </h2>

              <p className='text-sm text-zinc-300'>
                Boost transaction success rates with intelligent retries,
                automated reminders, and optimized payment routing.
              </p>
            </div>

            <button className='px-4 py-2 rounded-full border border-white text-white w-fit'>
              Learn More →
            </button>

          </div>

          {/* CARD 3 */}
          <div className='card relative rounded-xl flex flex-col justify-between w-full h-full bg-[#192826] p-10'>
            
            <img 
              className='w-16' 
              src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
              alt=""
            />

            <div className='flex flex-col gap-2'>
              <h2 className='text-xl font-bold text-white mt-2'>
                Risk & Compliance
              </h2>

              <p className='text-sm text-zinc-300'>
                Secure every transaction with advanced fraud detection,
                identity verification, and regulatory compliance systems.
              </p>
            </div>

            <button className='px-4 py-2 rounded-full border border-white text-white w-fit'>
              Learn More →
            </button>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Cards