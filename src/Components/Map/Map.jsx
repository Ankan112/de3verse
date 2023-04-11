import React from 'react';
import arrow1 from '../../../images/assets/Arrow 1.png'
import arrow2 from '../../../images/assets/Arrow 2.png'

const Map = () => {
    return (
        <div>
            <div className='container'>
                <h2 className='text-4xl font-bold font-akira sub-title-gradient text-center mt-12 md:mt-20 mb-6  md:mb-10'>MAP</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>

                    </div>
                    <div>
                        <h2 className='text-3xl font-bold font-akira text-white text-center mt-5 md:mt-0'>Header</h2>
                        <p className='text-2xl text-white font-poppins mt-4 text-center my-8 md:my-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>

                        <div className='flex justify-center'>
                            <div className='mr-5'><img src={arrow2} alt="RightArrow" /></div>
                            <div className='ml-5'><img src={arrow1} alt="LeftArrow" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;