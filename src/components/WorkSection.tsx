import { work } from '@/data'
import UnderLine from './UnderLine'

function WorkSection() {
    return (
        <section id="work-section" className='py-[80px]'>
            <div className="section-title">
                <h3 className="heading">Our Works
                    <UnderLine />
                </h3>
            </div>
            <div className="flex justify-center">
                <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-[40px] gap-[5px] px-4 mt-[40px]">
                    {
                        work.map((item, index) => (
                            <img className='lg:border-[10px] border-[4px] transition-[0.2s] hover:scale-[1.02] border-transparent hover:border-primary' src={`/assets/images/${item}`} key={index} alt={`${item}`} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default WorkSection