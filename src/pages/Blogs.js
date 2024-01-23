import Heading from '@/components/Heading/Heading'
import React from 'react'
import Link from 'next/link'
import axios from 'axios'


const Blogs = ({ blogs, error }) => {
    if (error) {
        return <div>An error occured: {error.message}</div>;
    }
    return (
        <>
            <Heading title="Our Blogs" />

            <div className='w-[80%] mx-auto my-10'>
                <div className='flex justify-center items-center flex-wrap gap-5 sm:gap-10'>
                    
                        {/* Mapping through the blogs array directly in the JSX */}
                        {blogs.map(blog => {
                            // Accessing the "Description" array for each blog
                            const descriptionArray = blog.attributes.Description;

                            // Accessing the text within the "Description" array
                            const text = descriptionArray[0].children[0].text;
                            const first10Words = descriptionArray[0].children[0].text.split(' ').slice(0, 10).join(' ');

                            // You can access other properties as needed
                            const name = blog.attributes.Name;
                            const createdAt = blog.attributes.createdAt;
                            // const imageurl = blog.attributes.imagelink

                            // Render the mapped blog content
                            return (
                                <div
                                    className="w-72 p-4 bg-white rounded-lg shadow-md" key={blog.id}>
                                    <img className="w-full h-44 object-cover rounded-t-lg" alt="Card Image"
                                        src={blog.attributes.imagelink} />

                                    <div className="p-4">
                                        
                                    </div>
                                    <div>
                                        
                                    </div>
                                    <h2 className="text-lg sm:text-xl font-semibold my-3 text-blue-800">{name}</h2>
                                    <p className="text-md sm:text-lg text-gray-600">{first10Words}...</p>
                                    <Link href={`/blogs/${blog.id}`}>
                                        <p className='flex justify-left items-center gap-1 text-blue-800 py-2 hover:font-semibold'>
                                            Read More
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </p>
                                    </Link>
                                </div>

                            );
                        })}
                    
                </div>
            </div>
        </>
    )
}

Blogs.getInitialProps = async ctx => {
    try {
        const res = await axios.get('http://localhost:1337/api/blogs');
        const blogs = res.data.data;
        return { blogs };
    } catch (error) {
        return { error };
    }
};

export default Blogs