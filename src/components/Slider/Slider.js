import React from 'react'
import styles from './slider.module.css'
// var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const Slider = () => {
    const Responsive = {
        0: {
            items: 1,
            margin: 5
        },
        768: {
            items: 2,
            margin: 5
        },
        1024: {
            items: 2,
            margin: 5
        },
    }
    return (
        <OwlCarousel responsive={Responsive}>
            <div className={styles.item}>
                <div className="p-4 bg-white rounded-lg shadow-md shadow-blue-300">
                    <div className="p-4">
                        <p className="text-gray-600 mb-4"><i>"Impressed with Vinayan's AI-driven traffic
                            solutions! The integration of AI in traffic management, coupled
                            with laser speed devices, has elevated safety and efficiency. Exceptional
                            products and outstanding service!"</i>
                        </p>
                        <h2 className="text-2xl font-semibold mt-4 mb-1 text-blue-800">Vijay Patil</h2>
                        <p className="text-gray-600">SSP, Highway Patrol Maharashtra</p>
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <div className="p-4 bg-white rounded-lg shadow-md shadow-blue-300">
                    <div className="p-4">
                        <p className="text-gray-600 mb-4"><i>"Revolutionary traffic management! Vinayan India
                            delivered an outstanding AI-powered solution. The intelligent
                            traffic management system, along with ANPR and laser devices, transformed our
                            operations. Highly recommend for
                            cutting-edge technology!"</i>
                        </p>
                        <h2 className="text-2xl font-semibold mt-4 mb-1 text-blue-800">Puspendar</h2>
                        <p className="text-gray-600">Additional Transport Commissioner</p>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    )
}

export default Slider