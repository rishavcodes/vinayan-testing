"use client"
import React from 'react'
import Slider from '@/components/Slider/Slider'
import InfiniteSlider from '@/components/InfiniteSlider/InfiniteSlider'
import CarouselDefault from '@/components/Carousel/CarouselDefault'
import Link from 'next/link'
import HomePage from '@/pages/Index'
import Layout from '@/components/Layout/Layout'

export default function Page() {
  return (
    <>
      <Layout>
        <div className="w-full flex flex-col">
          <section id="home" className="home bg-blue-800">
            <div className="mx-auto flex justify-center items-center py-[80px] sm:py-[160px]">
              <div className="flex justify-evenly items-center w-full flex-wrap px-6 sm:px-24">
                <div className="lg:w-full xl:w-[40%] text-white">
                  <div className="text-5xl sm:text-5xl font-bold leading-32 my-4 drop-shadow-md"
                    style={{ fontFamily: 'roboto-slab' }}
                  >
                    <h1 className=""
                      style={{ lineHeight: "120%" }}
                    >
                      Merging Cutting Edge Technology with AI for Safer Roads
                    </h1>
                  </div>
                  <div className="my-1 text-md md:text-xl drop-shadow-md sm:mx-0 mb-6">
                    Revolutionizing traffic enforcement through the seamless integrationof AI to create a safer and
                    more efficient future on the roads
                  </div>
                  <Link href="#contact"
                    className="border-1 border-white text-white text-xl bg-transparent p-3 rounded-md hover:bg-white hover:text-blue-800">
                    Get in Touch
                  </Link>
                </div>
                <div className="w-full lg:w-[30%] py-5">
                  <iframe className="w-full h-[200px] md:h-[400px] lg:h-[300px] rounded-lg mt-10 sm:mt-0"
                    src="https://www.youtube.com/embed/CJ__63nn488?si=T31T01ON_dkJpcmF" title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            </div>
          </section>

          <section className="details" id="details">
            <div className="mx-auto flex justify-center items-center my-[100px]">
              <div className="flex justify-evenly items-center w-full flex-wrap px-6 sm:px-24">
                <div className='w-full lg:w-[40%]'>
                  <div className="text-3xl md:text-4xl font-bold leading-32 my-4 drop-shadow-md"
                  >
                    Pioneering Traffic Safety Solutions with AI Integration
                  </div>
                  <div className="my-1 md:text-sm lg:text:md xl:text-lg drop-shadow-sm mb-2 sm:mx-0">
                    Vinayan India is leading the charge in the traffic management solutions by harnessing the power
                    of Artificial
                    Intelligence (AI). We specialise in revolutionising the dynamics of traffic flow, dedicated to
                    creating safer, more
                    efficient, and sustainable transportation networks. Our commitment extends beyond conventional
                    solutions; we leverage AI
                    to tackle the intricate challenges posed by modern urban mobility.
                  </div>
                  <div className="my-1 md:text-sm lg:text:md xl:text-lg drop-shadow-sm mb-4 sm:mx-0">
                    At Vinayan, we believe that the integration of AI is paramount to reshaping the landscape of
                    urban transportation.
                  </div>
                  <Link type="button" href="#contact"
                    className="text-white bg-blue-800 border border-1 border-blue-800 hover:bg-white hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-lg px-4 py-2 text-center">Contact
                    Us
                  </Link>
                </div>
                <div className="w-full lg:w-[30%] py-5">
                  {/* <div id="default-carousel" className="relative w-full rounded-xl" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                  <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image src="/images/carousel/img1.jpg"
                      className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg"
                      alt="..." width={300} height={100} />
                  </div>
                  <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image src="/images/carousel/img2.jpg"
                      className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg"
                      alt="..." width={300} height={100} />
                  </div>
                </div>
              </div> */}
                  {/* /images/carousel/img1.jpg */}
                  <CarouselDefault />
                </div>
              </div>
            </div>
          </section>


          <section className="quote bg-blue-800 text-white" id="quote">
            <div className="mx-auto text-center py-12">
              <div className="text-3xl md:text-4xl font-bold leading-32 my-4 drop-shadow-md">
                Get A Quote
              </div>
              <div className="text-2xl my-4 drop-shadow-md">
                Schedule a meeting with us
              </div>
              <div>
                <a href="tel:+91-8527988811" type="button"
                  className="text-blue-800 bg-white border-1 border-blue-800 hover:bg-white hover:text-blue-800 text-xl font-bold rounded-md px-4 py-2 text-center">
                  <span className="flex justify-center items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                      stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    Talk to Us
                  </span>
                </a>
              </div>
            </div>
          </section>


          <section className="services" id="services">
            <div className="mx-auto text-center my-[100px]">
              <div className="text-3xl md:text-4xl font-bold leading-32 drop-shadow-md mb-5"
              >
                Solutions We Provide
              </div>
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center gap-8 flex-wrap">
                  <div
                    className="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <img className="w-full h-52 object-cover rounded-t-lg" alt="Card Image"
                      src="https://img.freepik.com/free-photo/cctv-security-camera_1359-621.jpg?w=1380&t=st=1705061298~exp=1705061898~hmac=11ebf17fb51aee831c409488a3c200eab61804550915dae05967e3156b313809" />
                    <div className="p-4">
                      <h2 className="text-2xl font-semibold my-3 text-blue-800">AI Integrated <br /> Video Analytics
                      </h2>
                      <p className="text-gray-600">AI-powered video analysis for real-time insights, enhancing
                        security, and optimizing operations through intelligent
                        recognition.</p>
                      {/* <!-- <div className="flex justify-center items-center mt-4">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Learn More</button>
                    </div> --> */}
                    </div>
                  </div>

                  <div
                    className="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <img className="w-full h-52 object-cover rounded-t-lg" alt="Card Image"
                      src="https://img.freepik.com/free-photo/automatic-recognition-software-analyzing-city-elements_23-2150643780.jpg?w=1380&t=st=1705061953~exp=1705062553~hmac=0aefdc040d7a6d7f71b06843378ef0b4f97c8a214ffe27a136c1dcdf63ff8330" />
                    <div className="p-4">
                      <h2 className="text-2xl font-semibold my-3 text-blue-800">Smart Traffic <br /> Management System
                      </h2>
                      <p className="text-gray-600">Our Traffic Management service streamlines network traffic,
                        enhancing speed, security, and resource allocation.</p>
                      {/* <!-- <div className="flex justify-center items-center mt-4">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Learn
                        More</button>
                    </div> --> */}
                    </div>
                  </div>

                  <div
                    className="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <img className="w-full h-52 object-cover rounded-t-lg" alt="Card Image"
                      src="https://img.freepik.com/free-photo/aerial-views-with-cars-streets_23-2148959679.jpg?w=1380&t=st=1705062732~exp=1705063332~hmac=8ebed22c2d78beb15710164f23923e42f1f50671813a3a66608faeec08c0ee69" />
                    <div className="p-4">
                      <h2 className="text-2xl  font-semibold my-3 text-blue-800">Highway Traffic <br /> Mangement
                        Software</h2>
                      <p className="text-gray-600">Traffic Management Software optimizes traffic flow, enhances
                        safety, and streamlines operations through
                        intelligent monitoring</p>
                      {/* <!-- <div className="flex justify-center items-center mt-4">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Learn
                        More</button>
                    </div> --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="clients bg-blue-800 text-white" id="clients">
            <div className="mx-auto text-center py-12">
              <div className="text-3xl md:text-4xl font-bold leading-32 my-4 drop-shadow-md my-5"
              >
                Our Trusted Clients
              </div>
              <InfiniteSlider />
            </div>
          </section>


          <section className="whychooseus" id="why-choose-us">
            <div className="mx-auto text-center my-[100px]">
              <div className="text-3xl md:text-4xl font-bold leading-32 drop-shadow-md mb-10"
              >
                Why Choose Us
              </div>
              <div className="flex justify-center items-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  <div
                    className="w-96 p-4 bg-white rounded-lg shadow-md shadow-blue-300 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="p-4">
                      <h2 className="text-2xl font-semibold my-3 text-blue-800">Artificial Intelligence <br /> Driven
                        Technology
                      </h2>
                      <p className="text-gray-600">Harness cutting-edge AI technology for precise and efficient
                        traffic management solutions.
                      </p>
                    </div>
                  </div>

                  <div
                    className="w-96 p-4 bg-white rounded-lg shadow-md shadow-blue-300 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="p-4">
                      <h2 className="text-2xl font-semibold my-3 text-blue-800">Smart Traffic <br /> Enforcement
                      </h2>
                      <p className="text-gray-600">Redefine traffic enforcement with AI-enhanced laser devices,
                        ensuring safety and accuracy on the roads.
                      </p>
                    </div>
                  </div>

                  <div
                    className="w-96 p-4 bg-white rounded-lg shadow-md shadow-blue-300 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="p-4">
                      <h2 className="text-2xl font-semibold my-3 text-blue-800">Comprehensive <br /> Product Suite
                      </h2>
                      <p className="text-gray-600">Explore a range of advanced products, including ANPR systems, LIDAR
                        technology, and speed display boards.
                      </p>
                    </div>
                  </div>

                  <div
                    className="w-96 p-4 bg-white rounded-lg shadow-md shadow-blue-300 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="p-4">
                      <h2 className="text-2xl font-semibold my-3 text-blue-800">24*7 Chatbot <br />
                        Customer Support
                      </h2>
                      <p className="text-gray-600">Customer support with our dedicated chatbot, providing instant
                        assistance for seamless interactions.
                      </p>
                    </div>
                  </div>

                  <div
                    className="w-96 p-4 bg-white rounded-lg shadow-md shadow-blue-300 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="p-4">
                      <h2 className="text-2xl font-semibold my-3 text-blue-800">Sustainable <br />
                        Urban Mobility
                      </h2>
                      <p className="text-gray-600">Harness cutting-edge AI technology for precise and efficient
                        traffic management solutions.
                      </p>
                    </div>
                  </div>

                  <div
                    className="w-96 p-4 bg-white rounded-lg shadow-md shadow-blue-300 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="p-4">
                      <h2 className="text-2xl font-semibold my-3 text-blue-800">Innovative <br />
                        Solutions With AI
                      </h2>
                      <p className="text-gray-600">Pioneering the future of traffic management with our AI-integrated
                        devices, bringing innovation to every road.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="testimonials bg-blue-800 text-white" id="testimonials">
            <div className="text-center py-12">
              <div className="text-3xl md:text-4xl font-bold leading-32 my-4 drop-shadow-md my-5"
              >
                What our clients say
              </div>
              <div className="w-[90%] sm:w-[80%] mx-auto my-10">
                <Slider />
              </div>
            </div>
          </section>


        </div>
      </Layout>
    </>
  )
}