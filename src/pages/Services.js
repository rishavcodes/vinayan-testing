import React, {useState} from 'react'
import Heading from '@/components/Heading/Heading'
import ServiceCard from '@/components/ServiceCard/ServiceCard';

const Services = () => {

    const [selectedService, setSelectedService] = useState(0);

    const services = [
        {
            title: "Smart Traffic Management System",
            description: "Navigate the future of traffic control with our cutting-edge software...",
            details: ["Lane Detection", "ANPR", "Vehicle Class", "Seat Belt Detection", "Helmet Detection", "Tripple Riding", "Overspeed Detection", "Red Light Voilation"],
        },
        {
            title: "AI Integrated Video Analytic Solutions",
            description: "Unlock the potential of your video data with our AI-driven analytic solutions...",
            details: ["Object Detection", "Incident Detection", "Security and surveillance", "Anomaly Detection", "License Plate Recognition", "Object Classification", "Integration with Other Systems", "Behavior Analysis"],
        },
        {
            title: "Highway Traffic Management Software",
            description: "Take control of your highway traffic management with our specialized software...",
            details: ["Real-Time Traffic Monitoring", "Incident Detection ", "Dynamic Message Sign Control", "Variable Speed Limits", "Lane Management", "Traffic Signal Optimization", "Data Analytics and Reporting"],
        },
    ];

    const handleServiceClick = (index) => {
        setSelectedService(index);
    };

    return (
        <>
            <Heading title="Our Services" />

            <section class="about-details my-16">
                <div class="mx-auto w-[70%] text-center">
                    <p class="px-2 sm:px-24 my-10 text-lg">
                        At Vinayan, we pride ourselves on offering a diverse range of solutions tailored to meet the unique needs of our clients. From cutting-edge technology to innovative approaches, we bring a wealth of expertise to every project. Our commitment is to deliver excellence in every service we provide, ensuring that your organization receives not just a solution, but a strategic advantage. Explore the possibilities with us and discover how our services can elevate your operations to new heights.
                    </p>
                </div>
            </section>

            <div className="flex justify-center items-center flex-wrap gap-5 mt-8">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        onClick={() => handleServiceClick(index)}
                        isSelected={index === selectedService}
                    />
                ))}
            </div>
            {selectedService !== null && (
                <div className="mt-8 w-[70%] mx-auto">
                    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
                        {services[selectedService].details.map((detail, index) => (
                            <li className='py-4 border-2 shadow-sm rounded-lg text-center font-semibold' key={index}>{detail}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default Services