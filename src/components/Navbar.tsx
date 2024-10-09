"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`navbar absolute w-full bg-[#292727B2] ${isOpen ? "active" : ""}`}>
      <div onClick={() => setIsOpen(!isOpen)} className="toggle-switch">
        <img src="/assets/icons/bar.png" alt="bars" />
      </div>
      <div className="contact w-full absolute px-[52px]  pt-[16px]">
        <div className="detail flex justify-between">
          <ul className='flex gap-x-5'>
            <li>
              <a href="#" className='flex gap-x-2 text-white'>
                <img src="/assets/icons/mail.png" alt="mail_icon" />+123456789
              </a>
            </li>
            <li>
              <a href="#" className='flex gap-x-2 text-white'>
                <img src="/assets/icons/phone.png" alt="phone_icon" />barberz.123@info.com
              </a>
            </li>
          </ul>
          <ul className='flex gap-x-[34px]'>
            <li><a href="#"><img src="/assets/icons/facebook.png" className='w-[20px]' alt="facebook_icon" /></a></li>
            <li><a href="#"><img src="/assets/icons/x.png" className='w-[20px]' alt="x_icon" /></a></li>
            <li><a href="#"><img src="/assets/icons/web.png" className='w-[20px]' alt="web_icon" /></a></li>
            <li><a href="#"><img src="/assets/icons/youtube.png" className='w-[20px]' alt="youtube_icon" /></a></li>
          </ul>
        </div>
      </div>
      <div className="bar py-[6px] gap-x-[55px] flex items-center justify-center">
        <nav>
          <ul className='flex gap-x-[74px]'>
            <li><Link className='font-bold text-white text-[18px]' href="#">Home</Link></li>
            <li><Link className='font-bold text-white text-[18px]' href="#">Services</Link></li>
            <li><Link className='font-bold text-white text-[18px]' href="#">About</Link></li>
          </ul>
        </nav>
        <img src="/assets/images/logo-dark.png" alt="" className="logo" />
        <nav>
          <ul className='flex gap-x-[74px]'>
            <li><Link className='font-bold text-white text-[18px]' href="#">Team</Link></li>
            <li><Link className='font-bold text-white text-[18px]' href="#">Booking</Link></li>
            <li><Link className='font-bold text-white text-[18px]' href="#">Contact Us</Link></li>
          </ul>
        </nav>
        <nav className='mobile'>
          <ul className='flex gap-x-[74px]'>
            <li><Link className='font-bold text-white text-[18px]' href="#">Home</Link></li>
            <li><Link className='font-bold text-white text-[18px]' href="#">Services</Link></li>
            <li><Link className='font-bold text-white text-[18px]' href="#">About</Link></li>
            <li><Link className='font-bold text-white text-[18px]' href="#">Team</Link></li>
            <li><Link className='font-bold text-white text-[18px]' href="#">Booking</Link></li>
            <li><Link className='font-bold text-white text-[18px]' href="#">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar