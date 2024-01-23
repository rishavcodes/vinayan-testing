'use client'
import React from 'react'
import { Carousel } from '@material-tailwind/react'

const CarouselDefault = () => {
    return (

        <>
            <Carousel transition={{ duration: 1 }} className="rounded-xl" autoplay loop>
                <img
                    src="/images/carousel/img1.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="/images/carousel/img1.jpg"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
            </Carousel>
        </>

    )
}

export default CarouselDefault