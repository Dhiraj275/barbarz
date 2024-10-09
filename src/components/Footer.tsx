import React from 'react'
import UnderLine from './UnderLine'

const Footer = () => {
    return (
        <footer className='md:grid lg:grid-cols-3 md:grid-cols-2 block bg-[#35312F] pt-[35px]'>
            <div className='flex flex-col text-center items-center justify-center text-white'>
                <img src="/assets/images/logo-dark.png" alt="barberz_logo" />
                <p className='font-poppins text-[16px]  mb-5'>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.</p>
                <form>
                    <input type="email" name='email' className='p-2' required placeholder='Email*' /> <br />
                    <button className='h-[35px] text-[18px] mt-[18px] font-roboto px-8 rounded-full bg-primary border-2 border-white uppercase text-white'>
                        Subscribe
                    </button>
                </form>
            </div>
            <div className='grid md:grid-cols-2  links'>
                <div>
                    <div className="head text-white font-poppins text-[28px] uppercase flex flex-col items-center">
                        Quick links
                        <UnderLine size='sm' />
                    </div>

                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
                <div>
                    <div className="head text-white font-poppins text-[28px] uppercase flex flex-col items-center">
                        Services
                        <UnderLine size='sm' />
                    </div>

                    <ul>
                        <li><a href="#">Hairs</a></li>
                        <li><a href="#">Beauty</a></li>
                        <li><a href="#">Spa</a></li>
                        <li><a href="#">Massage</a></li>
                    </ul>
                </div>
            </div>
            <div className='px-8  lg:col-span-1  md:col-span-4'>
                <div className="head text-white font-poppins text-[28px] uppercase flex flex-col items-center">
                    Contact
                    <UnderLine size='sm' />
                </div>
                <ul>
                    <li><a href="tel:+4125987645"><img src="assets/icons/call.png" alt="" /> +4125987645</a></li>
                    <li><a className='lowercase' href="mailto:barberz.123@info.com"><img src="assets/icons/email.png" alt="" /> barberz.123@info.com</a></li>
                    <li><a href="#"><img src="assets/icons/location.png" alt="" /> golden street, chinatown
                        san  francisco</a></li>
                </ul>
                <div className="social-icon">
                    <ul className='flex'>
                        <li><a href="#"><img src="/assets/icons/facebook.png" alt="facebook_icon" /></a></li>
                        <li><a href="#"><img src="/assets/icons/x.png" alt="x_icon" /></a></li>
                        <li><a href="#"><img src="/assets/icons/youtube-icon.png" alt="youtube_icon" /></a></li>
                        <li><a href="#"><img src="/assets/icons/instagram.png" alt="web_icon" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="col-span-3  md:col-span-2 text-center text-[20px] pb-2 capitalize">
                <span className='text-white'>Copyright © 2021 All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer