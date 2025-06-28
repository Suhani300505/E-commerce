import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'
import OurPolicy from '../Components/OurPolicy'
import NewsletterBox from '../Components/NewsletterBox'

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const Home = () => {
  return (
    <div className="space-y-16">
      {[Hero, LatestCollection, BestSeller, OurPolicy, NewsletterBox].map((Component, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={fadeInUp}
        >
          <Component />
        </motion.div>
      ))}
    </div>
  )
}

export default Home
