"use client";
import React from 'react'
import { HeroHighlight, Highlight } from './ui/hero-highlight'
import { motion } from "framer-motion";
import { TypewriterEffect } from './ui/typewriter-effect';

function Hero() {
  const words=[
    {
      text:"Jr"
      
    },
    {
      text:"Full-"
    },
    {
      text:"Stack"
    },
    {
      text:"Developer"
    },

  ]
  return (
      <HeroHighlight className='mb-10'>
        <div className='text-4xl flex flex-col items-center'>
          <p className='text-5xl mb-7'>
              Hello I'm
            <Highlight>
              Ali Baran Demir.
            </Highlight>
          </p>
          <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.2,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="px-4 md:text-3xl lg:text-4xl  "
      >
            <TypewriterEffect words={words}></TypewriterEffect>
          </motion.h1>
        </div>
      </HeroHighlight>
      
   
  )
}

export default Hero