import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {

    return (
        <footer className="bg-blue-800">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                {/* <!-- <div className="md:flex md:justify-between"> --> */}
                <div className="grid grid-cols-2 gap-10 sm:gap-10 sm:grid-cols-3 md:grid-cols-4">
                    <div className="mb-6 md:mb-0">
                        <a href="https://vinayan.net" className="flex items-center">
                            <Image src="/images/vinayan-logo.png" className="h-auto me-3 rounded-md bg-white" alt="Vinayan Logo"
                                width={300} height={200} name="Vinayan(India) Consulting and Services Private Limited" />
                        </a>
                    </div>
                    <div>
                        <h2 className="mb-4 text-sm font-semibold uppercase text-white">Quick links</h2>
                        <ul className="text-white font-medium">
                            <li className="mb-1">
                                <a href="#" className="hover:underline">Products</a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="hover:underline">Services</a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="hover:underline">Careers</a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="hover:underline">Blogs</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 text-sm font-semibold uppercase text-white">Products</h2>
                        <ul className="text-white font-medium">
                            <li className="mb-1">
                                <a href="#" className="hover:underline ">ANPR</a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="hover:underline">Lidar</a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="hover:underline">Body Worn Camera</a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="hover:underline">Interceptor</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 text-sm font-semibold uppercase text-white">Follow Us</h2>
                        <div className="flex mt-4 sm:mt-0">
                            <Link href="https://www.instagram.com/vinayanindia/" className="fill-white">
                                {/* <FontAwesomeIcon icon="fab-brands fab-instagram" /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24">
                                    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                                </svg>
                            </Link>
                            <Link href="https://www.facebook.com/indiavinayan/" className="ml-4 fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24">
                                    <path d="M 5 3 C 3.897 3 3 3.897 3 5 L 3 19 C 3 20.103 3.897 21 5 21 L 11.621094 21 L 14.414062 21 L 19 21 C 20.103 21 21 20.103 21 19 L 21 5 C 21 3.897 20.103 3 19 3 L 5 3 z M 5 5 L 19 5 L 19.001953 19 L 14.414062 19 L 14.414062 15.035156 L 16.779297 15.035156 L 17.130859 12.310547 L 14.429688 12.310547 L 14.429688 10.574219 C 14.429687 9.7862188 14.649297 9.2539062 15.779297 9.2539062 L 17.207031 9.2539062 L 17.207031 6.8222656 C 16.512031 6.7512656 15.814234 6.71675 15.115234 6.71875 C 13.041234 6.71875 11.621094 7.9845938 11.621094 10.308594 L 11.621094 12.314453 L 9.2773438 12.314453 L 9.2773438 15.039062 L 11.621094 15.039062 L 11.621094 19 L 5 19 L 5 5 z"></path>
                                </svg>
                            </Link>
                            <Link href="https://twitter.com/IndiaVinayan" className="ml-4 fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24">
                                    <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 6.7011719 7 L 10.642578 12.632812 L 6.90625 17 L 8.2382812 17 L 11.240234 13.484375 L 13.697266 17 L 17.537109 17 L 13.351562 11.009766 L 16.773438 7 L 15.462891 7 L 12.759766 10.160156 L 10.552734 7 L 6.7011719 7 z M 8.5664062 7.9882812 L 10.052734 7.9882812 L 15.683594 16.011719 L 14.1875 16.011719 L 8.5664062 7.9882812 z"></path>
                                </svg>
                            </Link>
                            <Link href="https://www.linkedin.com/company/vinayan-india-consulting-and-services-pvt-ltd" className="ml-4 fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24">
                                    <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <!-- </div> --> */}
                <hr className="my-6 border-white sm:mx-auto lg:my-8" />
                <div className="sm:flex justify-center items-center text-center sm:items-center">
                    <span className="text-sm text-white sm:text-center">© 2024 <a
                        href="https://vinayan.net/" className="hover:underline">Vinayan™</a>. All Rights Reserved.
                    </span>

                </div>
            </div>
        </footer>
    )
}

export default Footer