import ContactForm from "@/components/general/ContactForm"
import SectionHeader from "@/components/general/SectionHeader"
import SectionTitle from "@/components/general/SectionTitle"
import SectionDivider from "@/components/ui/SectionDivider"
import SocialIcons from "@/components/ui/SocialIcons"
import { MapPin, Phone, Mail } from 'lucide-react'


const Contact = () => {
  return (
    <section className='mt-6 w-full px-3 md:max-w-3xl lg:max-w-6xl  items-center justify-center mx-auto'>
      <SectionHeader title="Contact" index="FO® — 03"/>
      <SectionTitle title="Get in Touch"/>
      <p>If you&rsquo;re interested in collaborating, have a project to discuss, or would like to explore potential opportunities, feel free to get in touch. I&rsquo;m open to freelance work, full-time roles, and meaningful partnerships.
      </p>
        
      <SectionDivider/>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20">
       
        <div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary-accent p-2 rounded-full">
                  <MapPin className="text-custom-black w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-700">Address</p>
                  <p className="text-base text-black">Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-accent p-2 rounded-full">
                  <Phone className="text-custom-black w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-700">Phone Number</p>
                  <p className="text-base text-custom-black">08161122595</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-accent p-2 rounded-full">
                  <Mail className="text-custom-black w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-700">Email</p>
                  <p className="text-base text-black">francisovberedjo@gmail.com</p>
                </div>
              </div>
            </div>
      
            <SectionDivider/>

            <div className="text-sm font-bold text-gray-700 space-y-4">
            <div>Where to Find Me: </div>
            <SocialIcons/>
            </div>
            <div className="lg:hidden">
            <SectionDivider/>
            </div>

        </div>

        <div>
          <ContactForm/>
        </div>
      </div>

    </section>
  )
}

export default Contact