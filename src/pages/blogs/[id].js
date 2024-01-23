// pages/blog/[id].js

import Heading from '@/components/Heading/Heading';
import axios from 'axios';

const BlogPost = ({ blog }) => {
    // You can access the blog data here
    const { attributes } = blog;
    const { Name, Description, imagelink } = attributes;

    return (
        <>
            <Heading title="Blogs" />
            <div className='max-w-screen-xl mx-auto py-10'>
                <div className='w-[600px]'>
                    <h2 className='text-4xl font-bold mb-6'>{Name}</h2>
                    <img src={imagelink} className="w-[600px] mb-10" alt='Image' />
                    <p>{Description[0].children[0].text}</p>
                </div>
            </div>
        </>
    );
};

BlogPost.getInitialProps = async ({ query }) => {
    const { id } = query;

    try {
        const res = await axios.get(`http://localhost:1337/api/blogs/${id}`);
        const blog = res.data.data;

        return { blog };
    } catch (error) {
        return { error };
    }
};

export default BlogPost;
