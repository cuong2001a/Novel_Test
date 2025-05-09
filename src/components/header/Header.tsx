'use client'
import React,{ useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import iconBar from '../../assets/bar.png';
import "@/styles/header.css";
import Image from 'next/image';
export const HeaderComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isActive, setIsActive] = useState<string>('/');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (path: string) => {
        setIsActive(path);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);
    return (
        <header className='bg-black md:px-10 md:py-5 py-3 px-5'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <button onClick={toggleMenu} className='block md:hidden mr-4'>
                    {isMenuOpen ? (
                            <div className="w-6 h-6 relative">
                                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -rotate-45"></span>
                                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform rotate-45"></span>
                            </div>
                        ) : (
                            <Image src={iconBar} alt="Menu" />
                        )}
                    </button>
                    <a href='#'>
                        <Image src={logo} alt=''/>
                    </a>
                    <nav className="ml-10 hidden md:block">
                        <ul className="flex items-center">
                        <li onClick={() => handleMenuItemClick('/')} className={`font-medium text-[14px] px-[18px] py-[10px] leading-5 ${isActive == '/' ? 'text-[#FFC700] bg-[#383A42] rounded-full' : 'text-[#D2D2D2]' }`}>
                            HOME
                        </li>
                        <li onClick={() => handleMenuItemClick('/items1')} className={`font-medium text-[14px] px-[18px] py-[10px] leading-5 ${isActive == '/items1' ? 'text-[#FFC700] bg-[#383A42] rounded-full' : 'text-[#D2D2D2]' }`}>
                            ITEMS1
                        </li>
                        <li onClick={() => handleMenuItemClick('/items2')} className={`font-medium text-[14px] px-[18px] py-[10px] leading-5 ${isActive == '/items2' ? 'text-[#FFC700] bg-[#383A42] rounded-full' : 'text-[#D2D2D2]' }`}>
                            ITEMS2
                        </li>
                        <li onClick={() => handleMenuItemClick('/items3')} className={`font-medium text-[14px] px-[18px] py-[10px] leading-5 ${isActive == '/items3' ? 'text-[#FFC700] bg-[#383A42] rounded-full' : 'text-[#D2D2D2]' }`}>
                            ITEMS3
                        </li>
                        <li onClick={() => handleMenuItemClick('/items4')} className={`font-medium text-[14px] px-[18px] py-[10px] leading-5 ${isActive == '/items4' ? 'text-[#FFC700] bg-[#383A42] rounded-full' : 'text-[#D2D2D2]' }`}>
                            ITEMS4
                        </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex gap-2">
                    <button className="bg-[#FFC700] hover:opacity-70 italic text-black font-black text-base md:py-2 md:px-8 py-[6px] px-6 rounded-full mx-0">
                        SIGN UP
                    </button>
                    <button className="border border-[#FFC700] hover:border-[#FFE8AB] italic text-white font-black md:py-2 md:px-8 py-[6px] px-6 rounded-full">
                        LOG IN
                    </button>
                </div>
            </div>
            <div className={`fixed top-[62px] inset-0 bg-[#1E1E1E] z-40 md:hidden ${isMenuOpen ? 'fade-in': 'hidden'}`}>
                <nav className="pt-5 px-5">
                    <ul className="flex flex-col space-y-6">
                        <li className="w-full">
                            <a onClick={() => handleMenuItemClick('/')} className={`block py-3 px-4 font-medium text-center ${isActive === "/" ? 'text-[#FFC700] bg-[#383A42] rounded-full' :'text-white'}`}>
                                HOME
                            </a>
                        </li>
                        <li className="w-full">
                            <a onClick={() => handleMenuItemClick('/items1')} className={`block py-3 px-4 text-center font-medium ${isActive === "/items1" ? 'text-[#FFC700] bg-[#383A42] rounded-full' :'text-white'}`}>
                                ITEMS 1
                            </a>
                        </li>
                        <li className="w-full">
                            <a onClick={() => handleMenuItemClick('/items2')} className={`block py-3 px-4 text-center font-medium ${isActive === "/items2" ? 'text-[#FFC700] bg-[#383A42] rounded-full' :'text-white'}`}>
                                ITEMS 2
                            </a>
                        </li>
                        <li className="w-full">
                            <a onClick={() => handleMenuItemClick('/items3')} className={`block py-3 px-4 text-center font-medium ${isActive === "/items3" ? 'text-[#FFC700] bg-[#383A42] rounded-full' :'text-white'}`}>
                                ITEMS 3
                            </a>
                        </li>
                        <li className="w-full">
                            <a onClick={() => handleMenuItemClick('/items4')} className={`block py-3 px-4 text-center font-medium ${isActive === "/items4" ? 'text-[#FFC700] bg-[#383A42] rounded-full' :'text-white'}`}>
                                ITEMS 4
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}