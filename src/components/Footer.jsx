import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-zinc-900 text-white px-20 py-20 font-["Neue_Montreal"]'>

      <div className='flex gap-20'>

        {/* LEFT SECTION */}
        <div className='w-1/3 flex flex-col gap-6'>
          
          <h1 className='text-3xl font-semibold'>
            CashFree
          </h1>

          <p className='text-zinc-400 leading-relaxed'>
            Powering modern businesses with seamless payments, payouts,
            and scalable financial infrastructure across global markets.
          </p>

          <div className='text-zinc-500 text-sm'>
            Trusted by startups and enterprises for secure transactions.
          </div>

        </div>

        {/* MIDDLE LINKS */}
        <div className='w-1/3 flex gap-16'>

          <div>
            <h2 className='text-lg font-semibold mb-4'>Payments</h2>
            <ul className='text-zinc-400 flex flex-col gap-2'>
              <li>Payment Gateway</li>
              <li>Payment Links</li>
              <li>Subscriptions</li>
              <li>UPI & Cards</li>
            </ul>
          </div>

          <div>
            <h2 className='text-lg font-semibold mb-4'>Solutions</h2>
            <ul className='text-zinc-400 flex flex-col gap-2'>
              <li>E-commerce</li>
              <li>SaaS Platforms</li>
              <li>Global Payments</li>
              <li>Mobile Apps</li>
            </ul>
          </div>

        </div>

        {/* RIGHT LINKS */}
        <div className='w-1/3 flex gap-16'>

          <div>
            <h2 className='text-lg font-semibold mb-4'>Developers</h2>
            <ul className='text-zinc-400 flex flex-col gap-2'>
              <li>API Docs</li>
              <li>SDKs</li>
              <li>Integration Guide</li>
              <li>Webhooks</li>
            </ul>
          </div>

          <div>
            <h2 className='text-lg font-semibold mb-4'>Company</h2>
            <ul className='text-zinc-400 flex flex-col gap-2'>
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className='border-t border-zinc-700 mt-16 pt-6 flex justify-between text-sm text-zinc-500'>
        <span>© 2026 PayFlow. All rights reserved.</span>

        <div className='flex gap-6'>
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Support</span>
        </div>
      </div>

    </div>
  )
}

export default Footer