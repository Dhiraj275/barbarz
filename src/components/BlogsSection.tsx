import React from 'react'
import UnderLine from './UnderLine'
import BlogCard from "./BlogCard"
import { blogs } from '@/data'

function BlogsSection() {
    return (
        <section id="blogs-section" className='py-[20px]'>
            <div className="section-title">
                <div className='flex justify-center gap-x-1'>
                    <h4 className="sub-heading">News </h4> &nbsp;
                    <h4 className="sub-heading">From </h4> &nbsp;
                    <h4 className="sub-heading">Blog </h4> &nbsp;
                </div>
                <h3 className="heading">What’s on our mind
                    <UnderLine />
                </h3>
            </div>
            <div className="flex mt-[40px] gap-[80px] m-auto md:px-10 px-2 justify-center blogs-card-wrap md:flex-nowrap flex-wrap ">
                {
                    blogs.map((item, index) => {
                        return (
                            <BlogCard description={item.description} image={item.image} title={item.title} author={item.author} day={item.day} month={item.month} key={index} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default BlogsSection