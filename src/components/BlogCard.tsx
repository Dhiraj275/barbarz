import Link from 'next/link';
import React from 'react'
interface BlogCardProps {
  author: string,
  title: string,
  description: string,
  month: string,
  day: number,
  image: string
}
const BlogCard = ({ author, title, description, month, day, image }: BlogCardProps) => {
  return (
    <Link href='#' className="w-[320px] card bg-white overflow-hidden">
      <div className='relative'>
        <div className="img w-full h-48 overflow-hidden">
          <img
            className="object-cover transition-[0.8s]"
            src={`/assets/images/${image}`}
            alt={title}
          />
        </div>
        <div className="flex absolute bg-primary  w-[55px] bottom-0 right-0 translate-y-[50%]  items-center justify-center mt-4">
          <span className="text-black font-bold py-2 text-center text-[18px]">{month} <br />{day}</span>
        </div>
      </div>

      <div className='border-l-4 border-primary pl-2 mt-4'>
        <p className="text-[18px] uppercase text-[#726F6E]">{author}</p>
        <h2 className="mt-2 text-[20px] font-bold font-poppins">{title}</h2>
      </div>
      <p className="mt-2  text-[16px] font-light">{description}</p>

    </Link>
  );
};

export default BlogCard;
