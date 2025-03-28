"use client"
import React from 'react'
import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import './Animation.css'
import Link from 'next/link';

const Header = () => {
    const [open, setopen] = useState(false)
    const change = () => {
        setopen(!open);
        console.log("Designed and devloped by Saumya Khushlani")
    }
    return (
        <>
            <div className='bg-[#1E5AFA]'>
                <div className='ani1 flex flex-row items-center md:justify-center md:gap-48 justify-between  py-4 md:px-0 px-4 text-xl'>
                    <div className="flex-row items-center justify-center gap-4 text-xl text-white md:flex hidden">
                        <Link href='#home'><div className="">Home </div></Link>
                        <Link href='#about'><div className="">About</div></Link>
                        <Link href='#test'><div className="">Testimonial</div></Link>
                        <Link href='#contact'><div className="">Contact </div></Link>
                        
                    </div>
                    <div className='font-semibold text-4xl text-white'>smartHomes</div>
                    <div className=" md:flex hidden flex-row items-center justify-center gap-4">
                        <button className='text-white'>Login</button>
                        <button className='bg-white text-black px-4 py-2 rounded'>SignUp</button>
                    </div>
                    <button className='md:hidden block text-white text-4xl' onClick={change}>&#9776; </button>

                </div>
                {open &&
                    <div className='w-[100%]  bg-[#1E5AFA] px-4 py-8 text-white text-2xl font-semibold overflow-y-hidden h-screen'>
                        
                        <Link href='#home'><div className="py-2 px-4 mb-3 rounded-2xl w-[100%] bg-white text-[#1E5AFA]" onClick={change}>Home </div></Link>
                        <Link href='#about'><div className="py-2 px-4 mb-3 rounded-2xl w-[100%] onClick={change}">About</div></Link>
                        <Link href='#test'><div className="py-2 px-4 mb-3 rounded-2xl w-[100%] onClick={change}">Testimonial</div></Link>
                        <Link href='#contact'><div className="py-2 px-4 mb-3 rounded-2xl w-[100%] onClick={change}">Contact </div></Link>
                        <div className="py-2 px-4 mb-3 rounded-2xl w-[100%]">SignUp</div>
                        <div className="py-2 px-4 mb-3 rounded-2xl w-[100%]">Login</div>
                        <div className='flex flex-row items-center justify-center gap-8 font-semibold relative'>
                            <FaFacebookF className="text-white text-3xl cursor-pointer" />
                            <FaInstagram className="text-white text-3xl cursor-pointer" />
                            <FaTwitter className="text-white text-3xl cursor-pointer" />
                            <FaLinkedinIn className="text-white text-3xl cursor-pointer" />
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Header
