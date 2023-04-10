import React from 'react';
import toroid from '../../../images/assets/SuperToroid-Iridescent.png'
import Button from '../../Shared/Button';

const SignUp = () => {
    return (
        <div className='container'>
            <h2 className='text-4xl font-bold font-akira text-center sub-title-gradient mt-16'>Sign up today</h2>
            <div>
                <div className='flex items-center justify-center mt-14'>
                    <img src={toroid} alt="" />
                    <p className='text-lg font-poppins ml-5 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
                <div className='flex items-center justify-center mt-14'>
                    <img src={toroid} alt="" />
                    <p className='text-lg font-poppins ml-5 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
                <div className='flex items-center justify-center mt-14'>
                    <img src={toroid} alt="" />
                    <p className='text-lg font-poppins ml-5 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
            </div>
            <div className='text-center mt-20 mb-32'>
                <Button btn_text={'CTA'}></Button>
            </div>
        </div>
    );
};

export default SignUp;