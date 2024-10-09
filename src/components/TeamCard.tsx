import React from 'react'

interface TeamCardProps {
    name: string,
    role: string,
    img: string,
}

function TeamCard({ name, role, img }: TeamCardProps) {
    return (
        <div className='card md:min-w-[340px] min-w-[280px]'>
            <div className="img relative">
                <img src={`/assets/images/${img}`} className='w-full' alt="david" />
                <div className='absolute socials w-full h-full bg-[#c5a55e] top-0 flex justify-center items-center'>
                    <div className="icons gap-x-2 flex">
                        <div className="icon w-[35px] h-[35px] flex justify-center items-center rounded-full  bg-[#1877F2]">
                            <img src="/assets/icons/facebook.png" alt="facebook" className='w-[25px] object-contain' />
                        </div>
                        <div className="icon w-[35px] h-[35px] flex justify-center items-center rounded-full  instagram">
                            <img src="/assets/icons/instagram.png" alt="instagram" className='w-[25px] object-contain' />
                        </div>
                        <div className="icon w-[35px] h-[35px] flex justify-center items-center rounded-full  bg-[#1DA1F2]">
                            <img src="/assets/icons/x.png" alt="x" className='w-[25px] object-contain' />
                        </div>
                        <div className="icon w-[35px] h-[35px] flex justify-center items-center rounded-full  bg-[#FF0000]">
                            <img src="/assets/icons/youtube-icon.png" alt="youtube" className='w-[25px] object-contain' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail text-center py-[14px] border-2 border-t-2 bg-primary font-poppins font-semibold text-white">
                <h5 className='uppercase  text-[35px]'>{name}</h5>
                <h6 className='text-[22px]'>{role}</h6>
            </div>
        </div >
    )
}

export default TeamCard