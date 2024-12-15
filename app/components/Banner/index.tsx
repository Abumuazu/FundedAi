'use client';
import Image from 'next/image';
import Register from '../Navbar/Registerdialog';
import Register2 from '../Navbar/Registerdialog2';

const Banner = () => {

    return (
        <div className='bg-header'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12'>


                    <div className='col-span-7 flex flex-col justify-evenly relative'>
                        {/* <Image src="/assets/logo/icon.svg" alt="star-image" width={55} height={97} className='absolute top-[-74px] right-[51px]' /> */}
                        {/* <Image src="/assets/banner/lineone.svg" alt="line-image" width={190} height={148} className='absolute top-[-74px] right-[51px]' /> */}
                        <h1 className='text-midnightblue text-4xl md:text-85xl text-center lg:text-start font-semibold lh-133 pt-5'>Unlock Global Opportunities</h1>
                        <h3 className='text-black opacity-75 text-lg font-normal text-center lg:text-start pt-8'>Empowering your journey with AI-driven solutions to secure globally funded opportunities. From work visas to scholarships, global events to startup grants, visas—your dreams, funded.</h3>
                       
                       <Register2/>
                     
                    </div>

                    <div className='col-span-5 flex justify-center xl:-mb-22 xl:-mr-32 pt-10 lg:pt-0'>
                        <Image src="/assets/banner/banner.png" alt="nothing" width={800} height={0} />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Banner;
