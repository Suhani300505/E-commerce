import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero Left Side with Animation */}
      <motion.div
        className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0"
        initial={{ opacity: 0, y: 50 }}  // Starts below the screen with opacity 0
        whileInView={{ opacity: 1, y: 0 }}  // Moves up to its normal position and fades in
        transition={{ duration: 1 }}
        viewport={{ once: true }}  // Trigger once when the element enters the viewport
      >
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base uppercase">OUR BESTSELLERS</p>
          </div>
          <h1 className='text-3xl sm:py lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base uppercase">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </motion.div>

      {/* Hero Right Side Image */}
      <img src={assets.hero_img} className='w-full sm:w-1/2' alt="Hero" />
    </div>
  )
}

export default Hero
