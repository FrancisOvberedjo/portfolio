import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ImageCard = () => {
  return (
     <motion.div
      className="bg-blue-600 rounded-[10px] w-full h-auto md:w-64 md:h-80   relative overflow-hidden flex items-end justify-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 70 }}
    >
      <Image
        src="/assets/francis.png"
        alt="Francis"
        width={300}
        height={200}
        className="object-contain"
        style={{ height: 'auto' }}
        priority
      />
    </motion.div>
  )
}

export default ImageCard