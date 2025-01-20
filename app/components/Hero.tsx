import React from 'react';

const Hero = () => {
    return (
        <div className='grid justify-between gap-20 items-center grid-cols-3'>
            <div className='col-span-2'>
                <h2 className='text-2xl font-semibold mb-4'>Hey, I'm Ashaduzzaman</h2>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure saepe aliquam soluta, officiis at cupiditate eveniet dolorum. Consequatur, illum. Sapiente ab nam fuga repellat perferendis amet facere, ad eveniet expedita?</p>
            </div>
            <img className='h-[200px] w-full rounded-xl overflow-hidden' src="/mypp.png" alt="" />
        </div>
    );
};

export default Hero;