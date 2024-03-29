import React from 'react'
import Image from 'next/image'
import styles from './navbar.module.css'
import Link from 'next/link'
import DropDown from '../Dropdown/DropDown'

const Navbar = () => {
    return (
        <>
            <nav className="bg-white sticky shadow-sm w-full z-20 top-0 start-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://vinayan.net/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src="/images/vinayan-logo.png" className="h-16"
                            width={100}
                            height={30}
                            alt="Vinayan(India) consulting and services PVT LTD Logo" />
                        {/* <!-- <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> --> */}
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <a type="button"
                            className="bg-blue-800 text-white border border-1 border-blue-800 hover:bg-white hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-lg px-4 py-2 text-center">Contact
                            Us</a>
                        <button data-collapse-toggle="navbar-sticky" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-md md:hidden"
                            aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul
                            className="flex flex-col p-4 md:p-0 mt-4 text-lg border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <Link href="/Index"
                                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                                    aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="/About"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About</Link>
                            </li>
                            <li>
                                <DropDown />
                            </li>
                            <li>
                                <Link href="/Services"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Services</Link>
                            </li>
                            <li>
                                <Link href="/Blogs"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Blogs</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar