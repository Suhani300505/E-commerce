import React from 'react';
import { motion } from 'framer-motion';

const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <motion.div
      className='text-center px-4'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className="text-2xl font-medium text-gray-800">Subscribe Now & Get 20% Off</p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>

      <form
        action="#"
        onSubmit={onSubmitHandler}
        className='w-full sm:w-[500px] flex items-center gap-3 mx-auto my-6 border pl-3 pr-1 py-1 rounded-full'
      >
        <input
          type="email"
          className="w-full outline-none text-sm px-3 py-2"
          placeholder='Enter Your Email'
          required
        />
        <button
          type='submit'
          className='bg-black text-white text-xs px-6 py-3 rounded-full hover:bg-gray-800 transition-all'
        >
          SUBSCRIBE
        </button>
      </form>
    </motion.div>
  )
}

export default NewsletterBox;
