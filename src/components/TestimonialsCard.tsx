import React from 'react'
interface TestimonialCardProps {
    author: string,
    role: string,
    img: string,
    testimonial: string,
    stars: number,
}

function TestimonialsCard({ author, role, img, testimonial, stars }: TestimonialCardProps) {
    return (
        <div className='bg-[#252424] relative flex gap-x-[30px] px-[15px] py-[50px] rounded-xl lg:flex-row flex-col'>
            <img src={`/assets/images/${img}`} className='h-[150px] w-[150px]' alt="" />
            <div className="detail">
                <p className="testimonial lg:mt-0 mt-4  text-white font-[600] font-poppins text-[18px]">
                    “{testimonial}”
                </p>

                <h4 className="author text-[35px] mt-[50px] font-bold text-primary font-poppins">
                    {author}
                </h4>
                <h5 className='font-poppins text-white text-[18px]'>
                    {role}
                </h5>
                <div className="stars mt-4 flex gap-x-1">
                    {
                        Array(5).fill(0).map((item, index) => {
                            if (index < stars) { return (<img key={index} src={`/assets/icons/star-primary.png`} alt={author} />) }
                            else { return (<img key={index} src={`/assets/icons/star.png`} alt={author} />) }
                        })
                    }
                </div>
            </div>
            <img className='absolute right-6 bottom-6 w-[60px] h-[60px]' src="assets/icons/left-quote.png" alt="" />
        </div>
    )
}

export default TestimonialsCard