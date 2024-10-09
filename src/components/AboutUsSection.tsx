import React from 'react'
import Button from './Button'

function AboutUsSection() {
  return (
    <section id="about-us" className="flex py-5  px-5 max-w-[1200px] m-auto flex-wrap">
      <div className="left lg:w-1/2 w-full  py-20 text-center flex flex-col items-center">
        <h4 className="sub-heading">Introducing</h4>
        <h3 className="heading">BARBERZ..The Barbershop
          Since 1990</h3>

        <img src="/assets/images/scissors.png" className="w-[80px]" alt="scissors" />

        <p className="font-roboto text-[20px] text-[#35312F]">Barber is a person whose occupation is mainly to cut dress groom style and shave men&apos;s and boys&apos; hair. A barber&apos;s place of work is known as a &quot;barbershop&quot; or a &quot;barber&apos;s&quot;. Barbershops are also places of social interaction and public discourse. In some instances, barbershops are also public forums.</p>
        <Button className="mt-[50px]">MORE ABOUT US</Button>
      </div>
      <div className="right lg:w-1/2 w-full relative lg:block flex flex-col items-center justify-center">
        <img src="/assets/images/about-1.png" className="lg:absolute w-full lg:w-[300px] lg:right-0 top-0 lg:-translate-x-[0%]" alt="" />
        <img src="/assets/images/about-2.png" className="lg:absolute w-full lg:w-[280px] lg:top-[50%] left-0 lg:-translate-y-[50%] lg:translate-x-[40%] " alt="" />
        <img src="/assets/images/about-3.png" className="lg:absolute w-full lg:w-[280px] lg:bottom-0 right-0 lg:translate-x-[0%]" alt="" />

      </div>
    </section>
  )
}

export default AboutUsSection