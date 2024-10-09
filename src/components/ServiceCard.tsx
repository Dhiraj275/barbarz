import React from 'react'

interface ServiceCardProps {
    title: string,
    img: string,
}

const ServiceCard = ({ title, img }: ServiceCardProps) => {
    return (
        <div className='bg-white md:max-w-max max-w-[420px] px-[15px] py-[12px] text-center flex items-center flex-col rounded-xl border-2 hover:border-primary transition-[0.2s]'>
            <img src={`/assets/icons/${img}`} alt="scissors" />
            <h3 className='text-[30px] font-[500]  mt-[20px]'>{title}</h3>
            <p className='font-[300] mt-[22px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien.</p>
            <button className='border-2 border-primary text-primary font-roboto rounded-lg px-[20px] hover:bg-primary-light transition-[0.2s] py-[12px] mt-[20px]'>
                READ MORE
            </button>
        </div>
    )
}

export default ServiceCard
