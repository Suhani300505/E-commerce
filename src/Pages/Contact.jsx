import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../Components/NewsletterBox'
import { motion } from 'framer-motion'

const Contact = () => {
  const Title = { text1: "CONTACT ", text2: "US" }

  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <h1>{Title.text1}{Title.text2}</h1>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 px-4 md:px-10">
        
        {/* Image */}
        <motion.img
          className='w-full md:max-w-[480px]'
          src={assets.contact_img}
          alt=""
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ amount: 0.2 }}
        />

        {/* Info */}
        <motion.div
          className="flex flex-col justify-center items-start gap-6"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ amount: 0.2 }}
        >
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Odhav <br /> Ahmedabad, Gujarat</p>
          <p className='text-gray-500'>Tel: 123-456-7890 <br /> Email: fashion@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn More About Our Teams And Job Opening</p>
          <p className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>
            Explore Jobs
          </p>
        </motion.div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
