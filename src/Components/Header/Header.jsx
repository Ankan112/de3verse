import React from 'react';
import Button from '../../Shared/Button';

const Header = () => {
    return (
        <div className='header-bg'>
            <div className='pt-3 md:pt-8 ml:12 container'>
                <h2 className='text-4xl font-bold font-akira text-white text-center'>Header</h2>
                <p className='text-lg text-white font-poppins mt-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                <div className='flex flex-col md:flex-row justify-between items-center py-4 md:py-8 lg:py-20'>
                    <div className='w-full lg:w-1/2 hidden lg:block'>
                        <iframe
                            width="100%"
                            height="412"
                            src="https://www.youtube.com/embed/5WfTEZJnv_8"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className='w-full lg:w-1/2 block lg:hidden text-center'>
                        <iframe
                            width="100%"
                            height="220px"
                            src="https://www.youtube.com/embed/5WfTEZJnv_8"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className='w-full md:w-1/2 ml-0 md:ml-10 md:text-right text-center'>
                        <h2 className='text-3xl font-bold font-akira text-white md:text-right text-center mt-3 md:mt-0'>Header</h2>
                        <p className='text-lg text-white font-poppins mt-4 text-center md:text-right my-4 md:my-8 lg:my-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        <div>
                            <Button btn_text={'Start Building'}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;