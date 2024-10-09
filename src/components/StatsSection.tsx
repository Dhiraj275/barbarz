import React from 'react'

function StatsSection() {
    return (
        <div className='flex justify-center items-center xl:gap-x-20 gap-x-10 bg-primary-light py-[80px] gap-y-[20px] md:flex-row flex-col' id="stats-section">
            <div className="stat-box text-center">
                <div className="stat font-poppins font-[600] text-[65px]">2000+</div>
                <div className="head font-poppins font-[500] text-[20px]">HAPPY CLIENTS</div>
            </div>
            <img src="assets/icons/scissors.png" className='w-[70px] h-[70px]' alt="scissor.png" />
            <div className="stat-box text-center">
                <div className="stat font-poppins font-[600] text-[65px]">500</div>
                <div className="head font-poppins font-[500] text-[20px]">HAIR CUTS</div>
            </div>
            <img src="assets/icons/scissors.png" className='w-[70px] h-[70px]' alt="scissor.png" />
            <div className="stat-box text-center">
                <div className="stat font-poppins font-[600] text-[65px]">150</div>
                <div className="head font-poppins font-[500] text-[20px]">STYLERS</div>
            </div>
            <img src="assets/icons/scissors.png" className='w-[70px] h-[70px]' alt="scissor.png" />
            <div className="stat-box text-center">
                <div className="stat font-poppins font-[600] text-[65px]">35</div>
                <div className="head font-poppins font-[500] text-[20px]">BRANCHES</div>
            </div>

        </div>
    )
}

export default StatsSection