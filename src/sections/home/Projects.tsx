import ProjectCard from '@/components/general/ProjectCard'
import SectionHeader from '@/components/general/SectionHeader'
import SectionTitle from '@/components/general/SectionTitle'


const Projects = () => {
  return (
    <section className='mt-6 w-full px-3 md:max-w-3xl lg:max-w-6xl  items-center justify-center mx-auto'>
        <SectionHeader title="Projects" index="FO® — 02"/>
        <SectionTitle title='Real-World Projects I&rsquo;ve Worked On'/>
        <p className='text-justify'>A collection of front-end projects that highlight my skills in building responsive, user-friendly interfaces with clean design and smooth interactions. I handled both the development and design for each one, paying close attention to detail, usability, and visual appeal. While most projects were built with <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong>, I also worked with <strong>Vue.js</strong>, <strong>Angular</strong>, <strong>SCSS</strong>, <strong>GSAP</strong>, and <strong>Vanilla JavaScript</strong> to showcase my range and adaptability across different front-end technologies.</p>
      
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mx-auto gap-y-4 md:gap-x-3 md:gap-y-3 lg:gap-x-5 lg:gap-y-10 mt-6'>

            <ProjectCard 
                title='Sunverge-Nigeria'
                image='/assets/projectimg/sunverge.png'
                slug='/projects'
                liveUrl='https://sunvergenigeria.vercel.app'
                githubUrl='https://github.com/FrancisOvberedjo/sunverge-nigeria'
                tags={['React', 'Node.js', 'Express', 'MongoDB']}
                
                />
            <ProjectCard 
                title='Sunverge-Nigeria'
                image='/assets/projectimg/webimg2.jpg'
                slug='/projects'
                liveUrl='https://sunvergenigeria.vercel.app'
                githubUrl='https://github.com/francisovberedjo/portfolio'
                tags={['React', 'Node.js', 'Express', 'MongoDB']}
                />

            <ProjectCard 
                title='Sunverge-Nigeria'
                image='/assets/projectimg/webimg3.jpg'
                slug='/projects'
                liveUrl='https://sunvergenigeria.vercel.app'
                githubUrl='https://github.com/francisovberedjo/portfolio'
                tags={['React', 'Node.js', 'Express', 'MongoDB']}
                />
            <ProjectCard 
                title='Sunverge-Nigeria'
                image='/assets/projectimg/webimg1.jpg'
                slug='/projects'
                liveUrl='https://sunvergenigeria.vercel.app'
                githubUrl='https://github.com/francisovberedjo/portfolio'
                tags={['React', 'Node.js', 'Express', 'MongoDB']}
                />
            <ProjectCard 
                title='Sunverge-Nigeria'
                image='/assets/projectimg/webimg1.jpg'
                slug='/projects'
                liveUrl='https://sunvergenigeria.vercel.app'
                githubUrl='https://github.com/francisovberedjo/portfolio'
                tags={['React', 'Node.js', 'Express', 'MongoDB']}
                />

            <ProjectCard 
                title='Sunverge-Nigeria'
                image='/assets/projectimg/webimg1.jpg'
                slug='/projects'
                liveUrl='https://sunvergenigeria.vercel.app'
                githubUrl='https://github.com/francisovberedjo/portfolio'
                tags={['React', 'Node.js', 'Express', 'MongoDB']}
                />
        </div>
    </section>
  )
}

export default Projects