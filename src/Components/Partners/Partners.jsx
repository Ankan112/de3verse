import React from 'react';
import partners1 from '../../../images/partners/image 12.png'
import partners2 from '../../../images/partners/image 13.png'
import partners3 from '../../../images/partners/image 14.png'
import partners4 from '../../../images/partners/image 15.png'
import partners5 from '../../../images/partners/image 16.png'
import partners6 from '../../../images/partners/image 17.png'

const Partners = () => {
    return (
        <div className='bg-[#000000] hidden md:block'>
            <div className='container pt-12 pb-16'>
                <h2 className='text-4xl font-bold font-akira text-center akira-white'>Our partners</h2>
                <div className='grid  md:grid-cols-3 lg:grid-cols-6 gap-3 mt-16'>
                    <div className='flex justify-center items-center'><img src={partners1} alt="" /></div>
                    <div className='flex justify-center items-center'><img src={partners2} alt="" /></div>
                    <div className='flex justify-center items-center'><img src={partners3} alt="" /></div>
                    <div className='flex justify-center items-center'><img src={partners4} alt="" /></div>
                    <div className='flex justify-center items-center'><img src={partners5} alt="" /></div>
                    <div className='flex justify-center items-center'><img src={partners6} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Partners;