import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu/>
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={'Our Story'}
          mainHeader={'About Us'}
        />

        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p> 
        </div> 
      </section>
      <section className="text-center my-8">
        <SectionHeaders 
        subHeader={'Don\'t hesitate'} 
        mainHeader={'Contact Us'} 
        />
        <div className="mt-2">
        <a className="text-2xl" href="tel:+919998885555">
          +91 9998885555
          </a>
         </div> 
      </section>
        
    </>
  )
}
