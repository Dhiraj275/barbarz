import { testimonials } from '@/data'
import UnderLine from './UnderLine'
import TestimonialsCard from './TestimonialsCard'

function TestimonialsSection() {
    return (
        <section id="testimonials-section" className='py-[80px]'>
            <div className="section-title">
                <h4 className="sub-heading">
                    Testimonials
                </h4>
                <h3 className="heading">Hear from our customers
                    <UnderLine />
                </h3>
            </div>
            <div className="flex mt-[40px] gap-8 m-auto lg:px-10 px-4 overflow-x-auto max-w-[1440px] Testimonials-card-wrap lg:flex-row flex-col">
                {
                    testimonials.map((item, index) => {
                        return (
                            <TestimonialsCard stars={item.stars} testimonial={item.testimonial} img={item.img} author={item.author} role={item.role} key={index} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default TestimonialsSection