'use client'

import { motion } from 'framer-motion'

import { Mail, Instagram, Dribbble } from 'lucide-react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const IconLinks = () => {
  return (
    <div className="flex space-x-4">
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17, bounce: 1 }}
        className='rounded-full p-2 hover:text-light-100 dark:hover:text-dark-100 hover:bg-dark-100 dark:hover:bg-light-100 ease-in-out'
        title='Email'
      >
        <a href=""><Mail size={26} strokeWidth={2} /></a>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17, bounce: 1 }}
        className='rounded-full p-2 hover:text-light-100 dark:hover:text-dark-100 hover:bg-dark-100 dark:hover:bg-light-100 ease-in-out'
        title='Linkedin'
      >
        <a href=""><FaLinkedinIn size={26} /></a>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17, bounce: 1 }}
        className='rounded-full p-2 hover:text-light-100 dark:hover:text-dark-100 hover:bg-dark-100 dark:hover:bg-light-100 ease-in-out'
        title='Github'
      >
        <a href=""><FaGithub size={26} /></a>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17, bounce: 1 }}
        className='rounded-full p-2 hover:text-light-100 dark:hover:text-dark-100 hover:bg-dark-100 dark:hover:bg-light-100 ease-in-out'
        title='Dribble'
      >
        <a href=""><Dribbble size={26} strokeWidth={2} /></a>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17, bounce: 1 }}
        className='rounded-full p-2 hover:text-light-100 dark:hover:text-dark-100 hover:bg-dark-100 dark:hover:bg-light-100 ease-in-out'
        title='Instagram'
      >
        <a href=""><Instagram size={26} strokeWidth={2} />
        </a>
      </motion.button>
    </div>
  )
}

export default IconLinks