import Button from '@/components/ui/Button'
import SectionDivider from '@/components/ui/SectionDivider'
import React from 'react'
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section className='mt-6 w-full px-4 md:max-w-3xl lg:max-w-6xl  items-center justify-center mx-auto'>
       
        <SectionDivider/>
        
        <h3>About</h3>
        <p>
            I&rsquo;m a multidisciplinary professional with a background in software engineering and a strong foundation in design. My expertise spans frontend web development, UI/UX design, and graphic design allowing me to bring both visual clarity and technical precision to every project.

            With experience in tools like Next.js, Tailwind CSS, Framer Motion, JavaScript, and TypeScript, I&rsquo;m focused on creating clean, responsive interfaces that are both intuitive and engaging. I work best when combining structure with strategy, and I believe that anything worth doing is worth doing well. Currently open to full-time opportunities where I can contribute, learn, and grow.
        </p>

        <SectionDivider/>

        <h3 className=''>Profile</h3>
        <ul>
            <li>Full Name: Francis Ovberedjo</li>
            <li>Date of Birth: 31/05/2001</li>
            <li>Nationality: Nigerian</li>
            <li>Current Location: Lagos, Nigeria</li>
            <li>Education: B.Sc. Software Engineering</li>
            <li>Languages: English (Fluent)</li>
            <li>Phone Number: 08161122595</li>
        </ul>

        <SectionDivider/>
        <Button downloadHref="/francis-cv.pdf" variant="gray" icon={Download}>
            Download CV
        </Button>

    </section>
  )
}

export default About