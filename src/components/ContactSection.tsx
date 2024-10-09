import React from 'react'
import UnderLine from './UnderLine'
import { services, team } from "@/data"
import Button from './Button'
function ContactSection() {
  return (
    <section id="contact-section" className='flex lg:flex-nowrap flex-wrap'>
      <div className="left w-full lg:w-3/4 flex justify-center items-center lg:p-0 py-20 px-4">
        <div className="section-title title-left">
          <div className='max-w-[500px]'>
            <h4 className="sub-heading">
              Contact
            </h4>
            <h4 className="heading">
              Get in Touch
              <UnderLine />
            </h4>
            <p className='font-roboto text-white text-[18px] font-[300]'>
              Suspendisse pretium felis dolor, sed placerat diam blandit vitae. Sed eu nisl massa. Phasellus vehicula tristique orci ut ultrices. Duis eu libero augue. In vulputate sodales tempus. Phasellus dolor orci, consectetur in tincidunt eget, consectetur non orci.
            </p>
          </div>
        </div>

      </div>
      <div className="section-title right w-full lg:w-2/4 py-[20px]">
        <div className="title font-poppins text-primary text-[35px]">
          Make an Appointment
        </div>
        <p className='text-white text-[22px]'>
          Barber is a person whose occupation is mainly to cut dress groom
        </p>

        <form className='mt-[40px]'>
          <div className='grid grid-cols-2 gap-y-[40px] gap-x-[20px] lg:px-0 px-2'>
            <input type="text" name="name" id="name" placeholder='Name' />
            <input type="email" name="email" id="email" placeholder='Email' />
            <input type="tel" name="phone" id="phone" placeholder='Phone' />
            <input type="text" name="time" id="time" placeholder='Time' />
            <select name="service" id="service">
              <option value="">Choose Service</option>
              {
                services.map((item, index) => {
                  return (
                    <option value={item.title} key={index}>{item.title}</option>
                  )
                })}
            </select>
            <select name="barber" id="barber">
              <option value="">Choose Barber</option>
              {
                team.map((item, index) => {
                  return (
                    <option value={item.name} key={index}>{item.name}</option>
                  )
                })}
            </select>
          </div>
          <Button className='mt-[70px]'>
            MAKE AN APPOINTMENT
          </Button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection