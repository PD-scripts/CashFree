import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 font-["Neue Montreal"] flex justify-between items-center'>
      
      {/* LOGO */}
      <div className="logo text-2xl font-semibold tracking-tight flex items-center gap-2">
        <div className="w-2 h-2 bg-[#6C5CE7] rounded-full"></div>
        <span className="text-white">CashFree</span>
      </div>

      {/* LINKS */}
      <div className="links flex gap-10">
        {["Payments","Solutions","Developers","Company","Pricing"].map((item,index) =>(
          <a 
            key={index} 
            className={`text-lg font-regular capitalize font-light ${index===4 && "ml-32"}`}
          >
            {item}
          </a>
        ))}
      </div>

    </div>
  )
}

export default Navbar