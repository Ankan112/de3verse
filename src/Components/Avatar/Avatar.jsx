import React from 'react';
import Button from '../../Shared/Button';
import avatarImages from '../../../images/assets/avatarsec.png'

const Avatar = () => {
    return (
        <div className='container py-10'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='w-full md:w-1/2'>
                    <h2 className='text-3xl font-bold font-akira sub-title-gradient'>Build your avatar</h2>
                    <p className='text-lg text-white font-poppins mt-12 mb-8 md:mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    <div className='mt-20 hidden md:block'>
                        <Button btn_text={'Start Building'}></Button>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex justify-center'>
                    <img width={'70%'} src={avatarImages} alt="" />
                </div>
            </div>
            <div className='text-center block md:hidden mt-8'>
                <Button btn_text={'Start Building'}></Button>
            </div>
        </div>
    );
};

export default Avatar;