import { client } from '@/data'
import UnderLine from './UnderLine'

function ClientSection() {
    return (
        <section id="client-section" className='py-[40px]'>
            <div className="section-title">
                <h3 className="heading">Our Clients
                    <UnderLine />
                </h3>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2  gap-[40px] mt-[40px]   justify-center items-center">
                {
                    client.map((item, index) => (
                        <div key={index} className='flex justify-center'>
                            <img className='hover:scale-[1.05] transition-[0.2s]' src={`/assets/images/${item}`} alt={`${item}`} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default ClientSection