import React from 'react';
import icon1 from '../../../images/assets/Vector (4).png'
import icon2 from '../../../images/assets/Vector (5).png'
import exploreLogo from '../../../images/assets/Explore.3bb9e59b.svg'
import Navigation from '../Navigation/Navigation';

const Banner = () => {
    return (
        <div className='banner-bg flex justify-center items-center'>
            <div className='container'>
                {/* <Navigation></Navigation> */}
                {/* <div className='flex'>
                        <div className='text-right'>
                            <p className='text-lg font-akira text-white font-bold mb-8'>Start</p>
                            <p className='text-lg font-akira text-white font-bold mb-8'>1</p>
                            <p className='text-lg font-akira text-white font-bold mb-8'>2</p>
                            <p className='text-lg font-akira text-white font-bold mb-8'>3</p>
                        </div>
                        <div style={{ borderLeft: '4px solid white', height: '210px' }} className='ml-4'>

                        </div>
                    </div> */}
                <div className='text-center'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold font-akira text-white'>A New world.</h2>
                    <h1 className='text-5xl md:text-6xl lg:text-[108px] font-bold banner-title-gradient font-akira'>D3Verse</h1>
                </div>
                {/* <div className='hidden lg:block'>
                        <p style={{ transform: 'rotate(90deg)' }} className='font-bold text-lg text-white font-akira'>Follow us </p>
                        <div><img src={icon1} alt="" /></div>
                        <div><img src={icon2} alt="" /></div>
                    </div> */}
                <div className='flex justify-center items-center mt-14'>
                    <img src={exploreLogo} alt="" />
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center md:mx-20 mt-14'>
                    <p className='font-akira text-3xl font-bold text-white mt-6 md:mt-0'>NATURE CITY</p>
                    <p className='font-akira text-3xl font-bold text-white mt-6 md:mt-0'>MAP</p>
                    <p className='font-akira text-3xl font-bold text-white mt-6 md:mt-0'>SCI-FI CITY</p>
                </div>
            </div>
        </div>

    );
};

export default Banner;