import React from 'react'
import UnderLine from './UnderLine'
import TeamCard from './TeamCard'
import { team } from '@/data'

function TeamSection() {
    return (
        <section id="team-section" className='py-[80px]'>
            <div className="section-title">
                <h4 className="sub-heading">
                    Specialists
                </h4>
                <h3 className="heading">Our Team
                    <UnderLine />
                </h3>
            </div>
            <div className="flex mt-[40px] gap-8 m-auto md:px-10 px-4 overflow-x-auto max-w-[1440px] team-card-wrap">
                {
                    team.map((item, index) => {
                        return (
                            <TeamCard img={item.img} name={item.name} role={item.role} key={index} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default TeamSection