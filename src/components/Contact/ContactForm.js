import React from 'react'
import { useState } from 'react';
// "use-client"
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [captcha, setCaptcha] = useState(null)
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        try {
            console.log(formData)
            const response = await axios.post('http://localhost:3001/send-email', formData);

            if (response.status === 200) {
                setSuccessMessage('Email sent successfully!');
                setErrorMessage('');
            }
            if (response.status === 204) {
                // setSuccessMessage('Email sent successfully!');
                setErrorMessage('email Not sent, please enter a valid email');
            }
        } catch (error) {
            setErrorMessage('Error sending email. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="mx-auto flex md:justify-center items-center py-[80px] sm:py-[100px]">
                <div className="flex justify-left md:justify-evenly items-center w-full flex-wrap px-4 md:px-6 sm:px-24">
                    <div className="mb-5">
                        <div className="font-bold text-3xl mb-2">Reach Us</div>
                        <div className=" text-xl mb-5">Feel free to reach to us for any queries</div>
                        <div className="flex justify-left items-center gap-5 mb-4">
                            <div className="border border-1 rounded-full p-3 bg-blue-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6 text-white fill-white">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                            </div>
                            <p className="font-bold">
                                +91-8527988811
                            </p>
                        </div>
                        <div className="flex justify-left items-center gap-5 mb-4">
                            <div className="border border-1 rounded-full p-3 bg-blue-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="w-6 h-6 text-white">
                                    <path
                                        d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                    <path
                                        d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                </svg>
                            </div>
                            <p className="font-bold">
                                info@vinayan.net
                            </p>
                        </div>
                        <div className="flex justify-left items-center gap-5">
                            <div className="border border-1 rounded-full p-3 bg-blue-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </div>
                            <p className="font-bold">
                                H3MC+XVP, Rd No. 224, Ramphal Chowk, Dwaraka, Block E, <br /> Palam Extension, Palam, New
                                Delhi,
                                Delhi 110075
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-3xl mb-2">Get Started</div>
                        <div className="font-semibold text-xl mb-5">Fill out the form below and we will get back to you <br />
                            within <span className="font-bold text-blue-800">24 Hours</span></div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm">Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                                        className="rounded-md border border-blue-400 outline-blue-800 w-full" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm">Email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                                        className="rounded-md border border-blue-400 outline-blue-800 w-full" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
                                <div>
                                    <label htmlFor="phone" className="block text-sm">Phone</label>
                                    <input type="text" name="phone" value={formData.phone} onChange={handleChange}
                                        className="rounded-md border border-blue-400 outline-blue-800 w-full" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm">Subject</label>
                                    <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                                        className="rounded-md border border-blue-400 outline-blue-800 w-full" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm">Type your message!</label>
                                <textarea name="message" id="" value={formData.message} onChange={handleChange}
                                    className="rounded-md border border-blue-400 outline-blue-800 w-full"></textarea>
                            </div>
                            <ReCAPTCHA sitekey='6Lf2V1gpAAAAAIcYLwTBrblZBvBJDM190INuJcbU' onChange={setCaptcha} />
                            {
                                !captcha ? "Please Enter the captcha to submit." : <div className="my-2">
                                    <button type='submit'
                                        className="bg-blue-800 text-white border-1 border-blue-800 hover:bg-white hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-lg px-6 py-2">
                                        Submit
                                    </button>
                                </div>
                            }
                            
                            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                            {successMessage && <div className="text-green-500">{successMessage}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm