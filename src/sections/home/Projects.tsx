import ProjectCard from '@/components/general/ProjectCard'
import SectionHeader from '@/components/general/SectionHeader'
import SectionTitle from '@/components/general/SectionTitle'


const Projects = () => {
  return (
    <section className='mt-6 w-full px-3 md:max-w-3xl lg:max-w-6xl  items-center justify-center mx-auto'>
        <SectionHeader title="Projects" index="FO® — 02"/>
        <SectionTitle title='Projects'/>
        <p>A collection of work Ive crafted with care, blending clean design, solid code, and just the right touch of creativity</p>
      
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mx-auto gap-y-4 md:gap-x-3 md:gap-y-3 lg:gap-x-5 lg:gap-y-10 mt-6'>

            <ProjectCard 
                title='Sunverge-Nigeria'
                image='/assets/projectimg/webimg1.jpg'
                slug='/projects'
                liveUrl='https://sunvergenigeria.vercel.app'
                githubUrl='https://github.com/francisovberedjo/portfolio'
                
                />
            <ProjectCard 
                title='Sunverge-Nigeria'
                image='/assets/projectimg/webimg1.jpg'
                slug='/projects'
                liveUrl='https://sunvergenigeria.vercel.app'
                githubUrl='https://github.com/francisovberedjo/portfolio'
                
                />

            <ProjectCard 
                title='Sunverge-Nigeria'
                image='/assets/projectimg/webimg1.jpg'
                slug='/projects'
                liveUrl='https://sunvergenigeria.vercel.app'
                githubUrl='https://github.com/francisovberedjo/portfolio'
                
                />
            <ProjectCard 
                title='Sunverge-Nigeria'
                image='/assets/projectimg/webimg1.jpg'
                slug='/projects'
                liveUrl='https://sunvergenigeria.vercel.app'
                githubUrl='https://github.com/francisovberedjo/portfolio'
                
                />
            <ProjectCard 
                title='Sunverge-Nigeria'
                image='/assets/projectimg/webimg1.jpg'
                slug='/projects'
                liveUrl='https://sunvergenigeria.vercel.app'
                githubUrl='https://github.com/francisovberedjo/portfolio'
                
                />

            <ProjectCard 
                title='Sunverge-Nigeria'
                image='/assets/projectimg/webimg1.jpg'
                slug='/projects'
                liveUrl='https://sunvergenigeria.vercel.app'
                githubUrl='https://github.com/francisovberedjo/portfolio'
                
                />
        </div>
    </section>
  )
}

export default Projects