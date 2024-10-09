import React from 'react'
import Button from './Button'


function CoverSection() {
    return (
        <section id="cover-section" className="text-center">
            <h3 className="font-poppins font-semibold lg:text-[55px] md:text-[45px] text-[35px] text-white">Our Hairstyle Enhances Your Smile!!</h3>
            <p className="font-roboto font-[400] lg:text-[25px] md:text-[22px] text-[20px] text-white md:w-[60%] mt-[15px] px-2">Our barbershop is the territory created purely for males who
                appreciate premium quality, time and flawless look.</p>
            <Button className="px-[60px] mt-[50px]">
                MAKE AN APPOINTMENT
            </Button>
        </section>
    )
}

export default CoverSection