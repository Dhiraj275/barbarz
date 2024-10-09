import React from 'react'
import Button from './Button'

const BestBarber = () => {
    return (
        <div id="best-barber" className='text-center py-[80px] px-5'>
            <div className='flex justify-center md:flex-nowrap flex-wrap gap-x-1'>
                <h4 className="sub-heading">Best </h4> &nbsp;
                <h4 className="sub-heading">Barbershop </h4> &nbsp;
                <h4 className="sub-heading">In </h4> &nbsp;
                <h4 className="sub-heading">The </h4> &nbsp;
                <h4 className="sub-heading">City </h4> &nbsp;
            </div>
            <div className="flex justify-center">
                <div className='max-w-[800px]'>
                    <h3 className='text-white capitalize font-prata sm:text-[70px] text-[35px]'>Making you look good is in our heritage.</h3>
                </div>
            </div>
            <div className="flex justify-center">
                <div className='max-w-[1100px]'>
                    <p className='text-white font-poppins sm:text-[26px] text-[20px] mt-[28px] capitalize font-light'>Barber is a person whose occupation is mainly to cut dress groom style and shave men’s and boy’s hair</p>
                </div>
            </div>
            <Button className='mt-[48px]'>
                MAKE AN APPOINTMENT
            </Button>
        </div>
    )
}

export default BestBarber