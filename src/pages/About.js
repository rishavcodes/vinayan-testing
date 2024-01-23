import CarouselDefault from '@/components/Carousel/CarouselDefault'
import Heading from '@/components/Heading/Heading'
import React from 'react'

const About = () => {
    return (
        <>
            <Heading title="About us" />

            <section class="about-details my-16">
                <div class="mx-auto w-[70%] text-center">
                    <h1 class="font-bold text-5xl">Welcome to Vinayan</h1>
                    <p class="px-4 sm:px-24 my-10">Where innovation meets safety in the realm of traffic management. We are a leading provider
                        of
                        cutting-edge solutions, leveraging the power of artificial intelligence to reshape urban mobility. Our
                        commitment is to
                        create a safer and more efficient traffic enforcement system, ensuring the best results for our customers.</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-wrap mx-4 sm:mx-80">
                    <div
                        class="p-4 bg-white rounded-lg shadow-md shadow-blue-300 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div class="p-4">
                            <h2 class="text-2xl font-semibold my-3 text-blue-800">Our Vision
                            </h2>
                            <p class="text-gray-600">At Vinayan, we envision a future where urban mobility is synonymous with safety and
                                efficiency. We are
                                committed to pioneering advancements in traffic enforcement systems, harnessing the power of AI to create a
                                safer and
                                smarter environment.
                            </p>
                        </div>
                    </div>

                    <div
                        class="p-4 bg-white rounded-lg shadow-md shadow-blue-300 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div class="p-4">
                            <h2 class="text-2xl font-semibold my-3 text-blue-800">Our Mission
                            </h2>
                            <p class="text-gray-600">our mission is to revolutionize traffic management through cutting-edge solutions
                                integrated with artificial
                                intelligence. We are dedicated to creating a comprehensive and secure traffic enforcement system that
                                prioritizes safety
                                and efficiency.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-blue-800 text-white">
                <div class="mx-auto flex justify-center items-center py-[40px]">
                    <div class="flex justify-center items-center w-full flex-wrap px-6 sm:px-24">
                        <div class='w-full lg:w-[40%]'>
                            <div class="text-3xl md:text-4xl font-bold leading-32 my-4 drop-shadow-md" style={{ fontFamily: "roboto-slab" }}>
                                What Sets Us Apart
                            </div>
                            <div class="my-1 md:text-sm lg:text:md drop-shadow-sm mb-2 sm:mx-0">
                                <ul class="list-disc">
                                    <li class="my-3 w-[80%]">
                                        AI-Powered Solutions: We harness the capabilities of artificial intelligence to deliver intelligent traffic management
                                        solutions that go beyond conventional approaches.
                                    </li>
                                    <li class="my-3 w-[80%]">
                                        Innovation: Our commitment to innovation drives us to continuously explore new possibilities, ensuring that our clients
                                        always benefit from the latest advancements in technology.
                                    </li>
                                    <li class="my-3 w-[80%]">
                                        Customer-Centric Approach: Our customers are at the heart of everything we do. We work closely with them to understand
                                        their unique needs and provide tailored solutions for optimal results.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="w-full lg:w-[30%] py-5">
                            <CarouselDefault />
                        </div>
                    </div>
                </div>
            </section>

            
        </>
    )
}

export default About