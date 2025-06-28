import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../Components/NewsletterBox'
import { motion } from 'framer-motion'

const About = () => {
  const Title = { text1: "ABOUT ", text2: "US" }
  const Title2 = { text1: "WHY ", text2: "CHOOSE US" }

  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <h1>{Title.text1}{Title.text2}</h1>
      </div>

      {/* Animated About Section */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        {/* Image slides in from left */}
        <motion.img
          className='w-full md:max-w-[450px]'
          src={assets.about_img}
          alt=""
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Text slides in from right */}
        <motion.div
          className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple goal: to allow users to browse, explore, and purchase a wide range of products from the comfort of their homes.</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted suppliers.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations—from browsing and ordering to delivery and beyond.</p>
        </motion.div>
      </div>

      {/* WHY CHOOSE US Section */}
      <div className="text-xl py-4">
        <h1>{Title2.text1}{Title2.text2}</h1>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
