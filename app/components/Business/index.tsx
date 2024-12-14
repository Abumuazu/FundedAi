import Image from 'next/image';
import Link from 'next/link';

const Business = () => {

    return (
        
        <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

            <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                <div className='col-span-6 flex flex-col justify-center'>
                    <h2 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>Better opportunities, Expert Applications.</h2>
                    <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>Application can be tedious and time-consuming, but with fundedAi you not only ge the best opportunities from our Ai scouts, you also get expert applications, smart reasoning, and Maximized success rates with curated support</h3>
                </div>

                <div className='col-span-6 flex justify-center mt-10 lg:mt-0 rounded-md'>
                    <Image src="/assets/business/business.png" alt="business" width={500} height={500} />
                </div>

            </div>
        </div>

    )
}

export default Business;
