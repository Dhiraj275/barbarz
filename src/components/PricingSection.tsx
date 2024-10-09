import { menuItems } from "@/data"
import Button from './Button'
import UnderLine from './UnderLine'
const PricingSection = () => {
    return (
        <section id="pricing-section" className='bg-primary-light py-[80px] my-[40px]'>
            <div className="section-title">
                <h3 className="heading">Barbershop Pricing Plan
                    <UnderLine />
                </h3>
            </div>

            <ul className="max-w-[1000px] lg:px-2 px-4 m-auto grid md:grid-cols-2 gap-x-[20%] gap-4 mt-[40px]">
                {
                    menuItems.map((item, index) => {
                        return (
                            <li key={index} className="service-item">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-[30px] text-[#35312F] font-roboto font-bold">{item.title}</h2>
                                    <div className="flex-grow border-t border-2 border-dashed border-primary mx-2"></div>
                                    <span className="text-[30px] font-poppins font-bold text-primary">{item.price}</span>
                                </div>
                                <p className="text-[16px] text-[#4A4845] mt-2">
                                    {item.description}
                                </p>
                            </li>
                        )
                    })
                }

            </ul>
            <div className="flex justify-center mt-[40px]">
                <Button>
                    View More
                </Button>
            </div>
        </section >
    )
}

export default PricingSection