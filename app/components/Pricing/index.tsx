"use client";
import { SetStateAction, useState } from 'react';
import Image from 'next/image';
import Register from '../Navbar/Registerdialog';

const names = [
    {
        heading: "Student plan",
        price: 40, 
        button: "Get Started",
        option: "Gain access to Global scholarships ",
        option1: '•Get access to paid internship opportunities',
        option2:"Get access to Student loans and grants",
        category: "yearly",
        imgSrc: "/assets/pricing/starone.svg",
    },
    {
        heading: "Career Plan",
        price: 100, // Annual price divided by 12 for monthly equivalent: $1.67 (approx.)
        button: "Get Started",
        option: "Get access to Globally remote career job opportunities",
        option1: 'Get access to Global Talent visas',
        option2:"Get access to Professional scholarships for MBA and MSC or certification courses.",
        category: "yearly",
        imgSrc: "/assets/pricing/starone.svg",
    },
    {
        heading: "Business Plan",
        price: 200, // Annual price divided by 12 for monthly equivalent: $4.17 (approx.)
        button: "Get Started",
        option: "Get access to Globally available grants per sector.",
        option1: 'Get access to Globally available Angels and VCs',
        option2:"Get access to Global Startup Visas",
        option3:"Get access to Funded Travels for conferences and events, Business loans and credits",
        category: "yearly",
        imgSrc: "/assets/pricing/startwo.svg",
    },
    {
        heading: "Ultra Plan",
        price: 300, // Annual price divided by 12 for monthly equivalent: $8.33 (approx.)
        button: "Get Started",
        option: "Get access to all option in student plan",
        option1: 'Get access to all option in career plan',
        option2:"Get access to all option in business plan",
        option3:"premium curated support from our team",
        category: "yearly",
        imgSrc: "/assets/pricing/starthree.svg",
    },
    {
        heading: "Enterprise Plan",
        price: 1, // Annual price divided by 12 for monthly equivalent: $8.33 (approx.)
        button: "Get Started",
        option: "Unlimited applications per year",
        category: "yearly",
        imgSrc: "/assets/pricing/starthree.svg",
    },
    {
        heading: "Student plan",
        price: 3.33, 
        button: "Get Started",
        option: "Gain access to Global scholarships ",
        option1: '•Get access to paid internship opportunities',
        option2:"Get access to Student loans and grants",
        category: "monthly",
        imgSrc: "/assets/pricing/starone.svg",
    },
    {
        heading: "Career Plan",
        price: 8.33,
        button: "Get Started",
        option: "Get access to Globally remote career job opportunities",
        option1: 'Get access to Global Talent visas',
        option2:"Get access to Professional scholarships for MBA and MSC or certification courses.",
        category: "monthly",
        imgSrc: "/assets/pricing/starone.svg",
    },
    {
        heading: "Business Plan",
        price: 16.67, // Converted to monthly equivalent for Business Plan
        button: "Get Started",
        option: "Get access to Globally available grants per sector.",
        option1: 'Get access to Globally available Angels and VCs',
        option2:"Get access to Global Startup Visas",
        option3:"Get access to Funded Travels for conferences and events, Business loans and credits",
        category: "monthly",
        imgSrc: "/assets/pricing/startwo.svg",
    },
    {
        heading: "Ultra Plan",
        price: 25, // Converted to monthly equivalent for Ultra Plan
        button: "Get Started",
        option: "Get access to all option in student plan",
        option1: 'Get access to all option in career plan',
        option2:"Get access to all option in business plan",
        option3:"premium curated support from our team",
        category: "monthly",
        imgSrc: "/assets/pricing/starthree.svg",
    },
    {
        heading: "Enterprise Plan",
        price: 8.33, 
        button: "Get Started",
        option: "Unlimited applications per year",
        category: "monthly",
        imgSrc: "/assets/pricing/starthree.svg",
    },
];


const Pricing = () => {

    const [selectedCategory, setSelectedCategory] = useState('monthly');

    const handleCategoryChange = (category: SetStateAction<string>) => {
        setSelectedCategory(category);
    };

    const filteredData = names.filter((item) => item.category === selectedCategory);

    return (
        <div id="pricing" className='pricing-bg relative py-10'>
            <Image src="/assets/pricing/upperline.png" alt="upperline-image" width={280} height={219} className='absolute top-[160px] left-[90px] hidden sm:block' />
            <Image src="/assets/pricing/lowerline.png" alt="lowerline-image" width={180} height={100} className='absolute bottom-[0px] right-[90px]' />
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-black'>Our Pricing Plan.</h3>

                <div className='mt-6 relative'>
                    <div className='flex justify-center'>
                        <div className='bg-cornflowerblue flex py-1 px-1 rounded-full '>
                            <h3
                                className={`text-xl font-medium cursor-pointer ${selectedCategory === 'yearly' ? 'text-electricblue bg-white rounded-full py-2 px-4 sm:py-4 sm:px-16' : 'text-black py-2 px-4 sm:py-4 sm:px-16'
                                    }`}
                                onClick={() => handleCategoryChange('yearly')}
                            >
                                Yearly
                            </h3>
                            <h3
                                className={`text-xl font-medium cursor-pointer ${selectedCategory === 'monthly' ? 'text-electricblue bg-white rounded-full py-2 px-4 sm:py-4 sm:px-16' : 'text-black py-2 px-4 sm:py-4 sm:px-16'
                                    }`}
                                onClick={() => handleCategoryChange('monthly')}
                            >
                                Monthly
                            </h3>
                        </div>
                    </div>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-6'>
                    {
                        filteredData.map((item, index) => (
                            <div className='pt-10 pb-28 pl-10 pr-10 bg-white rounded-3xl bxshd relative cursor-pointer hover:bg-dodgerblue group' key={index}>
                    
                                <h4 className='text-4xl sm:text-4xl font-semibold mb-8 text-midnightblue group-hover:text-white'>{item.heading}</h4>
                               <Register />
                                <h2 className='text-4xl sm:text-5xl font-semibold text-midnightblue mb-3 mt-5 group-hover:text-white'>{item.heading === "Enterprise Plan" ? 'Customized': '$' + item.price + '/'}<span className='text-lightgrey'>{(item.heading !== "Enterprise Plan") && (selectedCategory === 'yearly' ? 'yr' : 'mo')}</span></h2>

                                <div className='flex gap-4'>
                                    <Image src="/assets/pricing/tick.svg" alt="tick-image" width={32} height={32} />
                                    <p className='text-lg font-medium text-black opacity-60 group-hover:text-translucentwhite'>{item.option}</p>
                                </div>
                                <div className='flex gap-4 pt-6'>
                                    <Image src="/assets/pricing/tick.svg" alt="tick-image" width={32} height={32} />
                                    <p className='text-lg font-medium text-black opacity-60 group-hover:text-translucentwhite'>{item.option1}</p>
                                </div>
                                <div className='flex gap-4 pt-6'>
                                    <Image src="/assets/pricing/tick.svg" alt="tick-image" width={32} height={32} />
                                    <p className='text-lg font-medium text-black opacity-60 group-hover:text-translucentwhite'>{item.option2}</p>
                                </div>
                               {
                                item.option3 && (
                                    <div className='flex gap-4 pt-6'>
                                    <Image src="/assets/pricing/tick.svg" alt="tick-image" width={32} height={32} />
                                    <p className='text-lg font-medium text-black opacity-60 group-hover:text-translucentwhite'>{item.option3}</p>
                                </div>
                                )
                               }
                            </div>
                        ))}
                </div>

            </div>
        </div>
    );
}

export default Pricing;
