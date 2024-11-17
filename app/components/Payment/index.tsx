import Image from 'next/image';
import Link from 'next/link';

const Payment = () => {

    return (
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex justify-center'>
                        <Image src="/assets/business/business.jpeg" alt="payment" width={500} height={500} />
                    </div>

                    <div className='col-span-6 flex flex-col justify-center mb-32'>
                        <h2 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>Fully funded Global event</h2>
                        <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</h3>
                 
                    </div>

                </div>
            </div>
    )
}

export default Payment;
