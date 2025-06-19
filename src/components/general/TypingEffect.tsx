'use client';

import { Typewriter } from 'react-simple-typewriter';

const TypingEffect = () => {
  return (
    <span className="text-amber-600 font-bold ">
      <Typewriter
        words={['Front-End Developer', 'UI/UX Designer', 'Graphic Designer']}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={50}
        delaySpeed={4000}
      />
    </span>
  )
}

export default TypingEffect