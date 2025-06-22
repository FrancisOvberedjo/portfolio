import Button from '@/components/ui/Button'
import SectionDivider from '@/components/ui/SectionDivider'
import React from 'react'
import { Download, Plus } from 'lucide-react';
import SectionHeader from '@/components/general/SectionHeader';
import SectionTitle from '@/components/general/SectionTitle';
import SocialIcons from '@/components/ui/SocialIcons';
import DownloadButton from '@/components/ui/DownloadButton';

const About = () => {
  return (
    <section className='mt-6 w-full px-4 md:max-w-3xl lg:max-w-6xl  items-center justify-center mx-auto'>
       
        <SectionHeader title="About" index="FO® — 01" />
        
        <SectionTitle title="A Few Things About Me"/>
        <p className='text-justify'>
            I&rsquo;m a multidisciplinary professional with a background in software engineering and a strong foundation in design. My expertise spans frontend web development, UI/UX design, and graphic design allowing me to bring both visual clarity and technical precision to every project.

            With experience in tools like Next.js, Tailwind CSS, Framer Motion, JavaScript, and TypeScript, I&rsquo;m focused on creating clean, responsive interfaces that are both intuitive and engaging. I work best when combining structure with strategy, and I believe that anything worth doing is worth doing well. Currently open to full-time opportunities where I can contribute, learn, and grow.
        </p>
        <div className='mt-5'>
          <DownloadButton/>
        </div>

        <SectionDivider/>

        <h3 className='font-black uppercase'>Profile</h3>
        <ul className='mt-5 space-y-2'>
            <li className='flex items-center gap-2'><Plus className="w-4 h-4 text-secondary-accent" /> <span>Full Name: Francis Ovberedjo</span></li>
            <li className='flex items-center gap-2'><Plus className="w-4 h-4 text-secondary-accent" /> <span>Date of Birth: 31/05/2001</span></li>
            <li className='flex items-center gap-2'><Plus className="w-4 h-4 text-secondary-accent" /> <span>Nationality: Nigerian</span></li>
            <li className='flex items-center gap-2'><Plus className="w-4 h-4 text-secondary-accent" /> <span>Current Location: Lagos, Nigeria</span></li>
            <li className='flex items-center gap-2'><Plus className="w-4 h-4 text-secondary-accent" /> <span>Education: B.Sc. Software Engineering</span></li>
            <li className='flex items-center gap-2'><Plus className="w-4 h-4 text-secondary-accent" /> <span>Languages: English (Fluent)</span></li>
            <li className='flex items-center gap-2'><Plus className="w-4 h-4 text-secondary-accent" /> <span>Phone Number: +234 816 112 2595</span></li>
        </ul>

        <h3 className='font-black mt-5 uppercase'>Socials</h3>
        <div className='mt-5'>
          <SocialIcons/>
        </div>


    </section>
  )
}

export default About