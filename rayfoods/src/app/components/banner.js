import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ForwardArrow from './forwardArrow';

function Banner(props) {
    return (
        <div className='banner-contianer px-[5%] py-[_1.5rem] lg:px-[_7%] border border-white-500  flex flex-col gap-4 justify-between lg:items-center lg:flex-row'>
            <div className='left-item border border-blue-900 relative basis-[_48%]'>
             <span className='inline-block border border-red-600 z-[_1000] relative'>
                <Image src="/assets/images/banner-img-1.svg" alt="palm oil"
                width={242} height={278} priority/>
             </span>
             <span className='inline-block border border-red-600 relative lg:left-[_-50px] z-[_998]'>
                <Image src="/assets/images/banner-img-2.svg" alt='rice'
                 width={210} height={394}/>
             </span>
            </div>
            <div className='right-item basis-[_48%]'>
              <h2 className='mb-4 font-[_700] text-6xl'>Shop Your Best Red Oil and Rice</h2>
              <button  className='bg-[_#E41616] rounded-[_4px] border border-red-800 w-[_220px] p-2'>
                <Link href="/register" className='block border border-white-800 text-left font-[_700] text-lg relative'>Explore Products
                 <ForwardArrow/>
                </Link>
              </button>
            </div>
        </div>
    );
}

export default Banner;