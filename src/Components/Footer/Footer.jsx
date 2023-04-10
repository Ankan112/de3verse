import React from 'react';
import facebook from '../../../images/social/Vector.png'
import instagram from '../../../images/social/Vector1.png'
import linkedin from '../../../images/social/Vector2.png'
import youtube from '../../../images/social/Vector3.png'

const Footer = () => {
    return (
        <div className='bg-[#0C0C0C]'>
            <div className='container pt-10 pb-5'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <h2 className='akira-white font-bold text-4xl md:text-5xl mx-auto lg:w-[30%] mt-20'>D3Verse</h2>
                    <div className='w-full md:w-[60%] ml-0 md:ml-5 lg:ml-0'>
                        <div className='flex flex-col md:flex-row justify-between items-center mt-12 md:mt-0'>
                            <h3 className=' text-xl md:text-2xl font-bold akira-white'>Quick links</h3>
                            <div className='text-white flex  flex-col md:flex-row items-center justify-between font-poppins w-[60%]'>
                                <p className='mt-6 md:mt-0'>link</p>
                                <p className='mt-6 md:mt-0'>link</p>
                                <p className='mt-6 md:mt-0'>link</p>
                                <p className='mt-6 md:mt-0'>link</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row items-center  justify-between mt-10 md:mt-14'>
                            <h3 className='text-xl md:text-2xl font-bold akira-white'>Follow us on</h3>
                            <div className='text-white mt-12 md:mt-0 flex justify-between items-center font-poppins w-[80%] md:w-[60%]'>
                                <div><img src={facebook} alt="facebookIcon" /></div>
                                <div><img src={instagram} alt="instagramIcon" /></div>
                                <div><img src={linkedin} alt="linkedinIcon" /></div>
                                <div><img src={youtube} alt="youtubeIcon" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-lg font-poppins text-center text-white mt-14 md:mt-20'>Copyright &copy; D3Verse 2023</p>
            </div>
        </div>
    );
};

export default Footer;