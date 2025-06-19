import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ImageCard = () => {
  return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full md:w-3xl h-120 lg:items-center lg:justify-center rounded-xl overflow-hidden bg-gradient-to-b from-[#AE161D] to-[#D91B24] shadow-lg mt-5 lg:mt-20"
      >
          <div className="absolute bottom-0 w-full flex justify-center">
            <Image
              src="/assets/francis.png" // Replace with your transparent image
              alt="Transparent Image"
              width={400}
              height={0}
              style={{ height: 'auto' }}
              className="object-contain"
            />
          </div>
      </motion.div>
  )
}

export default ImageCard