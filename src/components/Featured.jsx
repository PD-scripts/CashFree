import { motion, useAnimation } from 'framer-motion';
import React from 'react';

const Featured = () => {

  const animations = [
    useAnimation(),
    useAnimation(),
    useAnimation()
  ];

  const handleHover = (i) => {
    animations[i].start({ y: "0%" });
  };

  const handleHoverEnd = (i) => {
    animations[i].start({ y: "100%" });
  };

  const cards = [
    {
      title: "SHOPIFY",
      img: "https://cdn-icons-png.flaticon.com/512/825/825500.png",
      heading: "Shopify Payments",
      desc: "Go live quickly with seamless Shopify integrations and support for UPI, cards, and wallets."
    },
    {
      title: "PAYMENTS",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
      heading: "Website & App Payments",
      desc: "Integrate APIs and SDKs to accept payments across web and mobile platforms."
    },
    {
      title: "GLOBAL",
      img: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
      heading: "International Payments",
      desc: "Accept payments in 140+ currencies and scale your business globally with ease."
    }
  ];

  return (
    <div className="w-full py-20 bg-[#2E1FA7]">
      
      {/* HEADER */}
      <div className="w-full px-20 pb-20 text-center">
        <h1 className='text-6xl font-["Neue_Montreal"] text-white'>
          Payments, Payouts, and Compliance
        </h1>
        <h2 className='text-4xl text- mt-4'>
          Built to Work Together
        </h2>
      </div>

      {/* CARDS */}
 <div className="px-20 flex gap-10">

  {/* CARD 1 */}
  <div className="w-1/3 bg-[#F1F1F1] rounded-2xl p-10">
    
    <img 
      src="https://cdn-icons-png.flaticon.com/512/825/825500.png" 
      className="w-20 mb-8"
      alt=""
    />

    <h2 className="text-2xl font-bold mb-4 text-black">
      Shopify payments
    </h2>

    <p className="text-base text-zinc-700 leading-relaxed mb-6">
      Go live in minutes with plug-and-play integrations for Shopify,
      websites, and apps. Accept UPI, cards, net banking, wallets,
      BNPL, EMI, and COD seamlessly.
    </p>

    <span className="text-blue-600 font-medium">
      Learn More »
    </span>

  </div>

  {/* CARD 2 */}
  <div className="w-1/3 bg-[#F1F1F1] rounded-2xl p-10">
    
    <img 
      src="https://cdn-icons-png.flaticon.com/512/2920/2920244.png" 
      className="w-20 mb-8"
      alt=""
    />

    <h2 className="text-2xl font-bold mb-4 text-black">
      Website and app payments
    </h2>

    <p className="text-base text-zinc-700 leading-relaxed mb-6">
      Integrate quickly with powerful SDKs and RESTful APIs.
      Enable seamless payments across web and mobile platforms
      with high reliability and performance.
    </p>

    <span className="text-blue-600 font-medium">
      Learn More »
    </span>

  </div>

  {/* CARD 3 */}
  <div className="w-1/3 bg-[#F1F1F1] rounded-2xl p-10">
    
    <img 
      src="https://cdn-icons-png.flaticon.com/512/854/854878.png" 
      className="w-20 mb-8"
      alt=""
    />

    <h2 className="text-2xl font-bold mb-4 text-black">
      International payments
    </h2>

    <p className="text-base text-zinc-700 leading-relaxed mb-6">
      Accept payments in 140+ currencies from customers worldwide.
      Simplify global transactions and settle directly in INR
      with full compliance support.
    </p>

    <span className="text-blue-600 font-medium">
      Learn More »
    </span>

  </div>

</div>
    </div>
  );
};

export default Featured;