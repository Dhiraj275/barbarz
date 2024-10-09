import React from 'react'
import UnderLine from './UnderLine'
import ServiceCard from "./ServiceCard"
import {services} from "@/data"
const ServicesSection = () => {
    return (
        <section id="services-section" className='bg-primary-light py-[80px]'>
            <div className="section-title">
                <h4 className="sub-heading">
                    Services
                </h4>
                <h3 className="heading">Our Services
                    <UnderLine />
                </h3>
            </div>

            <div className="max-w-[1200px] px-4 m-auto grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-[80px] justify-center items-center">
                {
                    services.map((item, index) => {
                        return (
                            <ServiceCard  key={index} img={item.img} title={item.title} />
                        )
                    })
                }
            </div>

        </section>
    )
}

export default ServicesSection