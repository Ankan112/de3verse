import React from 'react';
import blogImage from '../../../images/assets/gal5.png'

const Blog = () => {
    return (
        <>
            <div className='container py-10'>
                <h1 className='text-4xl font-bold font-akira sub-title-gradient'>News and blog</h1>
                <p className='text-lg text-white font-poppins mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero <br /> et velit interdum, ac aliquet odio mattis.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 md:mt-20'>
                    <div><img src={blogImage} alt="blogImage" /></div>
                    <div><img src={blogImage} alt="blogImage" /></div>
                    <div><img src={blogImage} alt="blogImage" /></div>
                </div>
            </div>
            {/* <div className='h-[2px] border-none my-3 border-t-teal-200 mb-10'></div> */}
            <hr className='mb-12 md:mb-20' style={{ borderColor: "#9747FF", borderWidth: "2px", marginTop: "20px" }} />
        </>
    );
};

export default Blog;